import 'dotenv/config'
import express from 'express'
import router from './routers/router'
import cors from 'cors'

const {PORT, ORIGINS} = process.env

const app = express()
app.use(express.static('dist'));
app.use(express.json({ limit: '2mb' }))

app.use(cors({
  origin: ORIGINS,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))

app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
// export default app