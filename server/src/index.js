const express = require('express')
const cors = require('cors')
const router = require('./routes/index.js')

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST',
    optionsSuccessStatus: 200 
}))

app.use(express.json())

app.use('/', router)

app.listen(4000, () => console.log('Server running on port 4000'))

/*
 * LINHA A PASSAR PRA UMA LIB CHATA PA CARAI :(
 * -------
 * const { TextDecoder, TextEncoder } = require("util");
 */


