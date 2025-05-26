export const VAPI_CALL_STATUSES = [
  "queued",
  "ringing",
  "in-progress",
  "forwarding",
  "ended"
] as const;
export type VapiCallStatus = (typeof VAPI_CALL_STATUSES)[number];

export enum VapiWebhookEnum {
  ASSITANT_REQUEST = "assistant_request",
  FUNCTION_CALL = "function_call",
  STATUS_UPDATE = "status_update",
  END_OF_CALL_REPORT = "end_of_call_report",
  HANG = "hang",
  SPEECH_UPDATE = "speech_update",
  TRANSCRIPT = "transcript"
}

export interface VapiCall {}

interface BasicVapiPayload {
  call: VapiCall
}

export interface FunctionArguments {
  transferred?: boolean;
  transfer_to?: any;
  urgent?: any;
  name?: string;
  location?: string;
}

export interface FunctionCall {
  name: string;
  arguments: FunctionArguments;
}

export interface FunctionCallPayload extends BasicVapiPayload {
  type: VapiWebhookEnum.FUNCTION_CALL;
  functionCall: FunctionCall; 
}

export interface ConversationMessage {
  role: "user" | "system" | "bot" | "function_call" | "function_result";
  message?: string;
  name?: string;
  args?: string;
  result?: string;
  time: number;
  endTime?: number;
  secondsFromStart: number;
}

export interface EndOfCallReportPayload extends BasicVapiPayload {
  type: VapiWebhookEnum.END_OF_CALL_REPORT;
  callId: string;
  endedReason: string;
  transcript: string;
  messages: ConversationMessage[];
  summary: string;
}

export type VapiPayload = 
  | FunctionCallPayload
  | EndOfCallReportPayload;

export interface FunctionCallMessageResponse {
    result: string[];
    transferred?: boolean;
    transfer_to?: string;
    urgent?: boolean;
    name?: string;
    location?: string;
}

export interface EndOfCallReportMessageResponse {
  callId: string;
  endedReason: string;
  transcript: string;
  messages: ConversationMessage[];
  summary: string;
}

export type VapiResponse = 
  | FunctionCallMessageResponse
  | EndOfCallReportMessageResponse;
