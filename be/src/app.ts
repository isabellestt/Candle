import 'dotenv/config'
import express, { Application } from 'express'
import { assistantRouter } from './routers/assistant'
import cors from 'cors'

const {PORT, ORIGINS} = process.env

const app = express()

app.use(cors({
  origin: ORIGINS,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))

app.use('/assistant', assistantRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})