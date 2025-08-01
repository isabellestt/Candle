import type { CreateSquadDTO } from "@vapi-ai/web/dist/api";
import { helplineAssistant } from "../assistant/helpline.assistant";
// import { authorityAssistant } from "../assistant/authorities.assistant";

const assistant = import.meta.env.VITE_VAPI_AUTHORITY_ASSISTANT_ID;

export const squad: CreateSquadDTO = {
  name: "helpline to authorities",
  members: [
    {
      assistant: helplineAssistant,
      assistantDestinations: [
        {
          message:
            "I'll connect you to the police via 999; we'll stay on the line together. Okay great, I am on the phone with an officer from {{agency}} and I've relayed the details of your situation with them. Okay they are ready to speak with you, I’ll transfer you now, take care and goodbye.",
          description: "Transfer call to Authorities assistant",
          type: "assistant",
          assistantName: "Authorities",
        },
      ],
    },
    {
      assistantId: assistant,
      assistantDestinations: [],
    },
  ],
};
