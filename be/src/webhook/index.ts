import { Request, Response } from "express";
import { VapiPayload, VapiWebhookEnum, EndOfCallReportPayload } from "../types";
import { EndOfCallReportHandler } from "./endOfCallReports";

export const WebhookHandler = (req: Request, res: Response) => {
  const payload: VapiPayload = req.body;

  try {
    switch (payload.message.type) {
      case VapiWebhookEnum.END_OF_CALL_REPORT:
        res.status(200).json(EndOfCallReportHandler(payload as EndOfCallReportPayload));
        break;
    }
  } catch (error) {
    console.error("Error processing webhook:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};