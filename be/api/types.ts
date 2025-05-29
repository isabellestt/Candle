export const VAPI_CALL_STATUSES = [
  "queued",
  "ringing",
  "in-progress",
  "forwarding",
  "ended"
] as const;
export type VapiCallStatus = (typeof VAPI_CALL_STATUSES)[number];

export enum VapiWebhookEnum {
  ASSITANT_REQUEST = "assistant-request",
  FUNCTION_CALL = "function-call",
  TOOL_CALLS = "tool-calls",
  STATUS_UPDATE = "status-update",
  END_OF_CALL_REPORT = "end-of-call-report",
  HANG = "hang",
  SPEECH_UPDATE = "speech-update",
  TRANSCRIPT = "transcript"
}

interface ToolCall {
  id: string;
  type: "function";
  function: {
    name: string;
    arguments: Record<string, any>; 
  };
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

export interface ToolCallPayload {
  message: {
    type: VapiWebhookEnum.TOOL_CALLS;
    toolCalls?: ToolCall[]; 
    artifact?: {
      messages: ConversationMessage[];
      messagesOpenAIFormatted?: any[];
    };
    call: {
      id: string;
      orgId: string;
      createdAt: string;
      updatedAt: string;
      type: string;
      status: string;
    };
  };
}
export interface EndOfCallReportPayload {
  message: {
    type: VapiWebhookEnum.END_OF_CALL_REPORT;
    toolCalls?: ToolCall[]; 
    artifact?: {
      messages: ConversationMessage[];
      messagesOpenAIFormatted?: any[];
    }; 
    call: {
      id: string;
      orgId: string;
      createdAt: string;
      updatedAt: string;
      type: string;
      status: string;
    };
    startedAt: string;
    endedAt: string;
    summary: string;
    durationSeconds: number;
    endedReason: string;
  };
}

// export interface EndOfCallReportPayload  {
//   type: VapiWebhookEnum.END_OF_CALL_REPORT;
//   callId: string;
//   endedReason: string;
//   transcript: string;
//   messages: ConversationMessage[];
//   summary: string;
// }

export type VapiPayload = 
  | ToolCallPayload
  | EndOfCallReportPayload;

export interface ToolCallMessageResponse {
    result: string[];
    transferred?: boolean;
    transfer_to?: string;
    urgent?: boolean;
    name?: string;
    location?: string;
}

export interface EndOfCallReportMessageResponse {
  callId: string;
  startedAt: string;
  durationSeconds: number;
  endedReason: string;
  messages: ConversationMessage[];
  summary: string;
}

export type VapiResponse = 
  | ToolCallMessageResponse
  | EndOfCallReportMessageResponse;
