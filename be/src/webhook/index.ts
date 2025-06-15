import { Request, Response } from "express";
import { VapiPayload, VapiWebhookEnum, EndOfCallReportPayload } from "../types";
import { EndOfCallReportHandler } from "./endOfCallReports";

export const WebhookHandler = (req: Request, res: Response) => {
  const MAX_SIZE = 2 * 1024 * 1024; 
  const contentLength = parseInt(req.headers['content-length'] || '0', 10);
  
  if (contentLength > MAX_SIZE) {
    return res.status(413).json({ error: 'Request body too large (max 2 MB).' });
  }
  const payload: VapiPayload = req.body;

  try {
    switch (payload.message.type) {
      case VapiWebhookEnum.END_OF_CALL_REPORT:
        res.status(200).json(EndOfCallReportHandler(payload as EndOfCallReportPayload));
        break;
      // case VapiWebhookEnum.FUNCTION_CALL:
      //   res.status(200).json({ message: "Tool calls webhook received" });
      //   break;
      default: 
        console.log("Unhandled webhook type:", payload.message.type);
        res.status(400).json({ error: "Unhandled webhook type" });
        break;
    }
  } catch (error) {
    console.error("Error processing webhook:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};