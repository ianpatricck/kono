import express from 'express'
import cors from 'cors'
import router from './routes.js'

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST',
    optionsSuccessStatus: 200 
}))

app.use(express.json())

app.use('/', router)

app.listen(4000, () => console.log('Server running on port 4000'))

