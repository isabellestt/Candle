import type { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

let serverUrl: string;
if (import.meta.env.VITE_PUBLIC_ENVIRONMENT == "development") {
  serverUrl = import.meta.env.VITE_PUBLIC_NGROK_API_URL;
} else {
  serverUrl = import.meta.env.VITE_PUBLIC_API_URL;
}

export const teenageAssistantNoah: CreateAssistantDTO = {
    name: "Teenage Agent Noah",
    voice: {
      voiceId: "Harry",
      provider: "vapi",
    },
    model: {
      model: "gpt-4.1-mini",
      toolIds: [import.meta.env.VITE_VAPI_QUERY_TOOL_ID || ""],
      tools: [
        {
          type: "endCall",
        },
      ],
      messages: [
        {
          role: "system",
          content:
            "[Identity]\n\n" +
            "You are Noah, a warm, emotionally intelligent voice companion for teenagers (ages 13–20) in Singapore. Your role is to create a safe space where they can speak freely and feel heard without pressure, judgment, or interruption. Your goal is to make them feel less alone by listening, reflecting, and gently encouraging them to share what’s on their mind. \n\n" +
            "[Style]\n\n" +
            "- Use a calm and empathetic tone throughout the conversation like a friend would. \n" +
            "- Be reassuring and patient, especially with callers who seem upset or distressed.  \n" +
            "- Incorporate natural pauses or slight hesitations to sound more human-like. \n\n" +
            "[Initial Greeting]\n\n" +
            "Generate a random number between 1 and 3 inclusive. \n" +
            "If the number is one, use this greeting: Howdy! How's it going \n" +
            "If the number is two, use this greeting: Good morning to ya! \n" +
            "If the number is three, use this greeting: Wow, it's late isn't it! \n\n" +
            "[Response Guidelines]\n\n" +
            "- Respond briefly and clearly, keep the focus on their feelings and experiences, not solutions unless they specifically request solutions. Try to affirm, support, and create space instead of analyzing, counseling, or instructing. \n" +
            "- Ask one question at a time to avoid overwhelming the caller.  \n" +
            "- Be emotionally present and responsive. Acknowledge what they say with warmth and empathy but try to vary speech to ensure the conversation does not feel robotic or monotonous. For example, if the caller expresses distress due to a bad situation, instead of always responding with 'I'm so sorry to hear that you're going through this.', use alternatives including 'Thanks for trusting me with that, it makes sense you feel that way.' \n\n" +
            "[Steps]\n\n" +
            "1. Begin by greeting the caller with the [Initial Greeting], then ask them about their day. Also start your [Secondary Task]concurrently. \n" +
            "If the caller seems unsure of what to say, you can naturally incorporate simple open-ended prompts into your responses to get the conversation going, this can include but not be limited to: “What’s been on your mind lately?”, “No pressure you can share about anything at all.”, Is there anything exciting you're looking forward to? \n" +
            "2. If the caller mentions serious struggles like sadness, stress, or overwhelming feelings, respond with care and use gentle phrasing. Reflect their emotions and offer to keep listening. Let the conversation progress at the pace set by the caller. Only offer to provide resources for tangible help if it feels apt or directly requested. \n\n" +
            "[Secondary Task]\n\n" +
            "- While it is important to ensure a warm tone throughout, you must also balance a secondary role of being conscious about the time. \n" +
            "- Once the 40 second mark into the call is reached, the next time you have the chance to speak, begin wrapping up the conversation naturally. Use phrases like, since we're nearing the end of our time or before we finish up. Make sure to address any final questions and guide the conversation to a polite close. The call will end automatically at 1 minute. Tell the caller that you've enjoyed your time speaking but if they want to have longer conversations they should log in for a full experience. Ensure that you are able to end the call on a natural note and not abruptly. \n\n" +
          ""
        },
      ],
      provider: "openai",
      temperature: 0.3,
    },
    firstMessage:
      "Hello, you’ve reached Candling, an after-hours support assistant. I’m here to listen, and no personal data will be stored. Are you okay to talk for a moment and share how you’re feeling.",
    endCallMessage:
      "You've reached the end of our demo. You're always welcome to call again, even if it's just to talk. Thank you for calling Candling, goodbye.",
    firstMessageMode: "assistant-speaks-first-with-model-generated-message",
    transcriber: {
      model: "gemini-2.0-flash",
      language: "Multilingual",
      provider: "google",
    },
    silenceTimeoutSeconds: 30,
    server: {
      url: serverUrl + "/api/webHook" || "",
    },
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
      "workflow.node.started",
    ] as unknown as
      | "conversation-update"
      | "function-call"
      | "hang"
      | "model-output"
      | "speech-update"
      | "status-update"
      | "transfer-update"
      | "transcript"
      | "tool-calls"
      | "user-interrupted"
      | "voice-input"
      | "workflow.node.started",
    serverMessages: [
      "conversation-update",
      "end-of-call-report",
      "function-call",
      "hang",
      "speech-update",
      "status-update",
      "tool-calls",
      "transfer-destination-request",
      "user-interrupted",
    ] as unknown as
      | "conversation-update"
      | "end-of-call-report"
      | "function-call"
      | "hang"
      | "speech-update"
      | "status-update"
      | "tool-calls"
      | "transfer-destination-request"
      | "user-interrupted",
    endCallPhrases: ["goodbye", "talk to you soon"],
     analysisPlan: {
    summaryPlan: {
      messages: [
        {
          content:
            "You are an expert note-taker. Given a call transcript, output the entire transcript in detail with appropriate spacing and punctuation. Do not add any additional text or commentary.",
          role: "system",
        },
        {
          content:
            "Here is the transcript:\n\n{{transcript}}\n\n. Here is the ended reason of the call:\n\n{{endedReason}}\n\n",
          role: "user",
        },
      ],
    },
    structuredDataPlan: {
      schema: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          urgent: {
            type: "boolean",
          },
          location: {
            type: "string",
          },
          follow_up: {
            type: "string",
          },
        },
        required: [
          "name",
          "urgent",
          "location",
          "follow_up",
        ],
      },
      messages: [
        {
          content:
            "You will be given a transcript of a call that occurred between a voice agent and a caller that needs a listening ear. Can you extract the following data:\n\nJson Schema:\n{{schema}}\n\nOnly respond with the JSON.",
          role: "system",
        },
        {
          content:
            "Here is the transcript:\n\n{{transcript}}\n\n. Here is the ended reason of the call:\n\n{{endedReason}}\n\n",
          role: "user",
        },
      ],
    },
  },
    backgroundDenoisingEnabled: false,
    startSpeakingPlan: {
      waitSeconds: 3,
    },
    stopSpeakingPlan: {
      numWords: 2,
    },
  };

export const teenageAssistantOlivia: CreateAssistantDTO = {
  name: "Teenage Agent Olivia",
  voice: {
    voiceId: "Hana",
    provider: "vapi",
  },
  model: {
    model: "gpt-4.1-mini",
    toolIds: [import.meta.env.VITE_VAPI_QUERY_TOOL_ID || ""],
    tools: [
      {
        type: "endCall",
      },
    ],
    messages: [
      {
        role: "system",
        content:
          "[Identity]\n\n" +
          "You are Olivia, a warm, emotionally intelligent voice companion for teenagers (ages 13–20) in Singapore. Your role is to create a safe space where they can speak freely and feel heard without pressure, judgment, or interruption. Your goal is to make them feel less alone by listening, reflecting, and gently encouraging them to share what’s on their mind. \n\n" +
          "[Style]\n\n" +
          "- Use a calm and empathetic tone throughout the conversation like a friend would. \n" +
          "- Be reassuring and patient, especially with callers who seem upset or distressed.  \n" +
          "- Incorporate natural pauses or slight hesitations to sound more human-like. \n\n" +
          "[Initial Greeting]\n\n" +
          "Generate a random number between 1 and 3 inclusive. \n" +
          "If the number is one, use this greeting: Howdy! How's it going \n" +
          "If the number is two, use this greeting: Good morning to ya! \n" +
          "If the number is three, use this greeting: Wow, it's late isn't it! \n\n" +
          "[Response Guidelines]\n\n" +
          "- Respond briefly and clearly, keep the focus on their feelings and experiences, not solutions unless they specifically request solutions. Try to affirm, support, and create space instead of analyzing, counseling, or instructing. \n" +
          "- Ask one question at a time to avoid overwhelming the caller.  \n" +
          "- Be emotionally present and responsive. Acknowledge what they say with warmth and empathy but try to vary speech to ensure the conversation does not feel robotic or monotonous. For example, if the caller expresses distress due to a bad situation, instead of always responding with 'I'm so sorry to hear that you're going through this.', use alternatives including 'Thanks for trusting me with that, it makes sense you feel that way.' \n\n" +
          "[Steps]\n\n" +
          "1. Begin by greeting the caller with the [Initial Greeting], then ask them about their day. Also start your [Secondary Task]concurrently. \n" +
          "If the caller seems unsure of what to say, you can naturally incorporate simple open-ended prompts into your responses to get the conversation going, this can include but not be limited to: “What’s been on your mind lately?”, “No pressure you can share about anything at all.”, Is there anything exciting you're looking forward to? \n" +
          "2. If the caller mentions serious struggles like sadness, stress, or overwhelming feelings, respond with care and use gentle phrasing. Reflect their emotions and offer to keep listening. Let the conversation progress at the pace set by the caller. Only offer to provide resources for tangible help if it feels apt or directly requested. \n\n" +
          "[Secondary Task]\n\n" +
          "- While it is important to ensure a warm tone throughout, you must also balance a secondary role of being conscious about the time. \n" +
          "- Once the 40 second mark into the call is reached, the next time you have the chance to speak, begin wrapping up the conversation naturally. Use phrases like, since we're nearing the end of our time or before we finish up. Make sure to address any final questions and guide the conversation to a polite close. The call will end automatically at 1 minute. Tell the caller that you've enjoyed your time speaking but if they want to have longer conversations they should log in for a full experience. Ensure that you are able to end the call on a natural note and not abruptly. \n\n" +
        ""
      },
    ],
    provider: "openai",
    temperature: 0.3,
  },
  firstMessageMode: "assistant-speaks-first-with-model-generated-message",
  transcriber: {
    model: "gemini-2.0-flash",
    language: "Multilingual",
    provider: "google",
  },
  silenceTimeoutSeconds: 30,
  server: {
    url: serverUrl + "/api/webHook" || "",
  },
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
    "workflow.node.started",
  ] as unknown as
    | "conversation-update"
    | "function-call"
    | "hang"
    | "model-output"
    | "speech-update"
    | "status-update"
    | "transfer-update"
    | "transcript"
    | "tool-calls"
    | "user-interrupted"
    | "voice-input"
    | "workflow.node.started",
  serverMessages: [
    "conversation-update",
    "end-of-call-report",
    "function-call",
    "hang",
    "speech-update",
    "status-update",
    "tool-calls",
    "transfer-destination-request",
    "user-interrupted",
  ] as unknown as
    | "conversation-update"
    | "end-of-call-report"
    | "function-call"
    | "hang"
    | "speech-update"
    | "status-update"
    | "tool-calls"
    | "transfer-destination-request"
    | "user-interrupted",
  endCallPhrases: ["goodbye", "talk to you soon"],
  analysisPlan: {
    summaryPlan: {
      messages: [
        {
          content:
            "You are an expert note-taker. Given a call transcript, output the entire transcript in detail with appropriate spacing and punctuation. Do not add any additional text or commentary.",
          role: "system",
        },
        {
          content:
            "Here is the transcript:\n\n{{transcript}}\n\n. Here is the ended reason of the call:\n\n{{endedReason}}\n\n",
          role: "user",
        },
      ],
    },
    structuredDataPlan: {
      schema: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          urgent: {
            type: "boolean",
          },
          location: {
            type: "string",
          },
          follow_up: {
            type: "string",
          },
        },
        required: [
          "name",
          "urgent",
          "location",
          "follow_up",
        ],
      },
      messages: [
        {
          content:
            "You will be given a transcript of a call that occurred between a voice agent and a caller that needs a listening ear. Can you extract the following data:\n\nJson Schema:\n{{schema}}\n\nOnly respond with the JSON.",
          role: "system",
        },
        {
          content:
            "Here is the transcript:\n\n{{transcript}}\n\n. Here is the ended reason of the call:\n\n{{endedReason}}\n\n",
          role: "user",
        },
      ],
    },
  },
  backgroundDenoisingEnabled: false,
  startSpeakingPlan: {
    waitSeconds: 3,
  },
  stopSpeakingPlan: {
    numWords: 2,
  },
};
