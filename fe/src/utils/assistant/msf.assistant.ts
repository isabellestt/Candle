import type { CreateAssistantDTO } from "@vapi-ai/web/dist/api"
export const MSFAssistant: CreateAssistantDTO = {
  name: "MSF",
  voice: {
      voiceId: "Elliot",
      provider: "vapi"
  },
  model: {
      model: "gpt-4o",
      messages: [
          {
              "role": "system",
              "content": "Hello, you have reached MSF. This is the end of our demo. Please call back when you're available. After this sentence, use the endCall function."
          }
      ],
      provider: "openai",
      tools: [
        {
          type: "endCall"
        }
      ],
  },
  firstMessage: "Hello.",
  voicemailMessage: "Please call back when you're available.",
  endCallMessage: "Goodbye.",
  clientMessages: [
    "conversation-update",
    "function-call",
    "hang",
    "model-output",
    "speech-update",
    "status-update",
    "transfer-update",
    "transcript",
    "tool-calls",
    "user-interrupted",
    "voice-input",
    "workflow.node.started"
  ] as unknown as ("conversation-update" | "function-call" | "hang" | "model-output" | "speech-update" | "status-update" | "transfer-update" | "transcript" | "tool-calls" | "user-interrupted" | "voice-input" | "workflow.node.started"),
  serverMessages: [
      "conversation-update",
      "end-of-call-report",
      "function-call",
      "hang",
      "speech-update",
      "status-update",
      "tool-calls",
      "transfer-destination-request",
      "user-interrupted"
  ] as unknown as ("conversation-update" | "end-of-call-report" | "function-call" | "hang" | "speech-update" | "status-update" | "tool-calls" | "transfer-destination-request" | "user-interrupted"),
  transcriber: {
      model: "nova-3",
      language: "en",
      provider: "deepgram"
  },
}