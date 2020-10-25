const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { Pool } = require('pg')

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


const getBooks = async (req, res) => {
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

// Add routes.
app.route('/books')
    // GET endpoint
    .get(getBooks)
    // POST endpoint
    //.post(addBook)

// Start server.
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})