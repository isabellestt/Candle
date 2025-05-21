export const MessageEnum = {
  TRANSCRIPT: "transcript",
  FUNCTION_CALL: "function-call",
  FUNCTION_CALL_RESULT: "function-call-result",
  ADD_MESSAGE: "add-message",
} as const;

export type MessageEnumType = typeof MessageEnum[keyof typeof MessageEnum];

export const MessageRoleEnum = {
  USER: "user",
  SYSTEM: "system",
  ASSISTANT: "assistant",
} as const;

export type MessageRoleEnumType = typeof MessageRoleEnum[keyof typeof MessageRoleEnum];

export const TranscriptMessageEnum = {
  PARTIAL: "partial",
  FINAL: "final",
} as const;

export type TranscriptMessageEnumType = typeof TranscriptMessageEnum[keyof typeof TranscriptMessageEnum];

// Interface definitions with the new types
export interface BaseMessage {
  type: MessageEnumType;
}

export interface TranscriptMessage extends BaseMessage {
  type: typeof MessageEnum.TRANSCRIPT;
  role: MessageRoleEnumType;
  transcriptType: TranscriptMessageEnumType;
  transcript: string;
}

export interface FunctionCallMessage extends BaseMessage {
  type: typeof MessageEnum.FUNCTION_CALL;
  functionCall: {
    name: string;
    parameters: unknown;
  };
}

export interface FunctionCallResultMessage extends BaseMessage {
  type: typeof MessageEnum.FUNCTION_CALL_RESULT;
  functionCallResult: {
    forwardToClientEnabled?: boolean;
    result: unknown;
    [a: string]: unknown;
  };
}

export type Message =
  | TranscriptMessage
  | FunctionCallMessage
  | FunctionCallResultMessage;