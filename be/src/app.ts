import 'dotenv/config'
import express, { Application } from 'express'
import { assistantRouter } from './routers/assistant'
import { logPoliceTransfer } from './functions/logPoliceTransfer'
import cors from 'cors'

const {PORT, ORIGINS} = process.env

const app = express()

app.use(express.json())

app.use(cors({
  origin: ORIGINS,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))

app.use('/assistant', assistantRouter)

app.post("/api/logPoliceTransfer", async (req, res) => {
  try {
    console.log("Received request to log police transfer:", req.body);
    const { transferred } = req.body;
    const result = await logPoliceTransfer({ transferred });
    res.json(result);
  } catch (error) {
    console.error("Error handling logPoliceTransfer:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})