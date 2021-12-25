import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const user      = process.env.DB_USER
const password  = process.env.DB_PASSWORD
const cluster   = process.env.DB_CLUSTER
const name      = process.env.DB_NAME

const queryConnection = `mongodb+srv://${user}:${password}@${cluster}.wtik9.mongodb.net/${name}?retryWrites=true&w=majority`

mongoose.connect(queryConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

export default mongoose
