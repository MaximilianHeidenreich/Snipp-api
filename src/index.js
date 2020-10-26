const YAML = require('yamljs')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const { body, validationResult } = require('express-validator')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = YAML.load(`${__dirname}/swagger.yaml`)
const { Pool } = require('pg')
const { generateId } = require('./utils')

// Create pool.
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})

// Create App.
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())  
app.use('/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Define rate limits.
const getSnippsLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 2,
})
const getSnippLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 30,
})
const addSnippLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 20,
})
const updateSnippLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 30,
})


// GET /snipp
const getSnipps = async (req, res) => {
    try {
        const client = await pool.connect()
        const result = await client.query('SELECT id FROM snipps')
        res.json({ data: (result) ? result.rows : null })
        client.release()
    } catch (err) {
        console.error(err)
        res.status(500).json({ err: err })
    }
}

// POST /snipp
const addSnipp = async (req, res) => {
    try {
        const client = await pool.connect()
        const id = generateId(6)
        const result = await client.query('INSERT INTO snipps (ID, name, lang, ownerPin, content) VALUES  (\'' + id + '\', $1, $2, $3, $4)', [
            req.body.name,
            req.body.lang,
            req.body.ownerPin,
            req.body.content
        ])
        res.json({ data: { snippID: id } })
        client.release()
    } catch (err) {
        console.error(err)
        res.status(500).json({ err: err })
    }
}

// GET /snipp/:snippID
const getSnipp = async (req, res) => {
    try {
        const client = await pool.connect()
        const result = await client.query('SELECT * FROM snipps WHERE ID=\'' + req.params.snippID + '\'')
        const row = (result) ? result.rows[0] : null
        res.json({ data: {
            id: row.id,
            name: row.name,
            lang: row.lang,
            content: row.content,
            isOwner: row.ownerPin === req.query.ownerPin ? true : false
        } })
        client.release()
    } catch (err) {
        console.error(err)
        res.status(500).json({ err: err })
    }
}

// POST /snipp/:snippID
// TODO: Implement
const updateSnipp = async (req, res) => {

    // FValidation errors.
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const client = await pool.connect()
        var result = await client.query('SELECT * FROM snipps WHERE ID=\'' + req.params.snippID + '\'')
        var row = (result) ? result.rows[0] : null
        
        if (req.body.ownerPin === row.ownerpin) {
            result = await client.query('UPDATE snipps SET name=$1, lang=$2, content=$3 WHERE ID=\'' + req.params.snippID + '\'', [
                req.body.name,
                req.body.lang,
                req.body.content
            ])
            res.json({ data: result })
        }
        else {
            res.status(401).json({ err: 'Invalid ownerPin!' })
        }
        
        client.release()
    } catch (err) {
        console.error(err)
        res.status(500).json({ err: err })
    }
}

// Add routes.
app.route('/v1/snipp')
    .get(getSnippsLimiter, getSnipps)
    .post(addSnippLimiter, [
        // Max lengths.
        body('name').isLength({ max: 15 }),
        body('lang').isLength({ max: 15 }),
        body('ownerPin').isLength({ max: 9 }),
        body('content').isLength({ max: 10000 })
    ], addSnipp)
app.route('/v1/snipp/:snippID')
    .get(getSnippLimiter, getSnipp)
    .post(updateSnippLimiter, [
        // Max lengths.
        body('name').isLength({ max: 15 }),
        body('lang').isLength({ max: 15 }),
        body('content').isLength({ max: 10000 })
    ], updateSnipp)

// Start server.
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})