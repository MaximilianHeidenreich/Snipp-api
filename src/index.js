const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
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


// GET /snipp
const getSnipps = async (req, res) => {
    try {
        const client = await pool.connect()
        const result = await client.query('SELECT * FROM snipps')
        const results = { 'results': (result) ? result.rows : null}
        res.json({ err: false, data: results })
        client.release()
    } catch (err) {
        console.error(err)
        res.json({ err: true, data: err })
    }
}

// POST /snipp
const addSnipp = async (req, res) => {
    try {
        const client = await pool.connect()
        const result = await client.query('INSERT INTO snipps (ID, name, lang, ownerPin, content) VALUES  ("$1", "$2", "$3", "$4", "$5")', [
            generateId(6),
            req.body.name,
            req.body.lang,
            req.body.ownerPin,
            req.body.content,
        ])
        res.json({ err: false, data: result })
        client.release()
    } catch (err) {
        console.error(err)
        res.json({ err: true, data: err })
    }
}

// GET /snipp/:snippID
const getSnipp = async (req, res) => {
    try {
        const client = await pool.connect()
        const result = await client.query('SELECT * FROM snipps WHERE ID="$1"', [req.params.snippID])
        const results = { 'results': (result) ? result.rows[0] : null}
        res.json({ err: false, data: results })
        client.release()
    } catch (err) {
        console.error(err)
        res.json({ err: true, data: err })
    }
}

// POST /snipp/:snippID
// TODO: Implement
const updateSnipp = async (req, res) => {
    try {
        const client = await pool.connect()
        const result = await client.query('UPDATE snipp SET name="$2", lang="$3", content="$4" WHERE ID="$1"', [
            req.params.snippID,
            req.body.name,
            req.body.lang,
            req.body.content,
        ])
        res.json({ err: false, data: result })
        client.release()
    } catch (err) {
        console.error(err)
        res.json({ err: true, data: err })
    }
}

// Add routes.
app.route('/v1/snipp')
    .get(getSnipps)
    .post(addSnipp)
app.route('/v1/snipp/:snippID')
    .get(getSnipp)
    .post(updateSnipp)

// Start server.
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})