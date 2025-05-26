import { Request, Response } from "express";
import { VapiPayload, VapiWebhookEnum } from "../types";
import { FunctionCallHandler } from "./functionCall";
import { EndOfCallReportHandler } from "./endOfCallReports";

export const WebhookHandler = (req: Request, res: Response) => {
  const payload: VapiPayload = req.body;
  try {
    switch (payload.type) {
      case VapiWebhookEnum.FUNCTION_CALL:
        res.status(200).json(FunctionCallHandler(payload));
        break;
      case VapiWebhookEnum.END_OF_CALL_REPORT:
        res.status(200).json(EndOfCallReportHandler(payload));
        break;
      default:
        console.error("Unhandled webhook type:", payload);
        res.status(400).json({ error: "Unhandled webhook type" });
    }
  } catch (error) {
    console.error("Error processing webhook:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};