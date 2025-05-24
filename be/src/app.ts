import 'dotenv/config'
import express, { Application } from 'express'
import { assistantRouter } from './routers/assistant'
import { logTransfer } from './functions/logTransfer'
import { postNameAndLocation } from './functions/postNameAndLocation'
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

app.post("/api/logTransfer", async (req, res) => {
  try {
    console.log("Received request to log transfer:", req.body);
    const { transferred, transfer_to, urgent } = req.body;
    const result = await logTransfer({ transferred, transfer_to, urgent });
    res.json(result);
  } catch (error) {
    console.error("Error handling logTransfer:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/postNameAndLocation", async (req, res) => {
  try {
    const { name, location } = req.body;
    const result = await postNameAndLocation({ name, location });
    res.json(result);
  } catch (error) {
    console.error("Error handling postNameAndLocation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
})

app.get("/api/callInfo", (req, res) => {

})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})