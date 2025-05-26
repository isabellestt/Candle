import 'dotenv/config'
import express from 'express'
import { assistantRouter } from './routers/assistant'
import cors from 'cors'

import { VapiPayload, VapiWebhookEnum } from './types'
import { FunctionCallHandler } from './webhook/functionCall'
import { EndOfCallReportHandler } from './webhook/endOfCallReports'

const {PORT, ORIGINS} = process.env

const app = express()

app.use(express.json())

app.use(cors({
  origin: ORIGINS,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))

app.use('/assistant', assistantRouter)

app.post("/webhook", (req, res) => {
  const payload: VapiPayload = req.body
  try {
    switch (payload.type) {
      case VapiWebhookEnum.FUNCTION_CALL:
        res.status(200).json(FunctionCallHandler(payload))
        break;
      case VapiWebhookEnum.END_OF_CALL_REPORT:
        res.status(200).json(EndOfCallReportHandler(payload))
        break;
      default:
        console.error("Unhandled webhook type:", payload);
        res.status(400).json({ error: "Unhandled webhook type" });
    }

  } catch (error) {
    console.error("Error in webhook handler:", error);
    res.status(500).json({error: "Internal Server Error"});
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})