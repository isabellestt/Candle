import type { CreateSquadDTO } from "@vapi-ai/web/dist/api";
import { helplineAssistant } from "../assistant/helpline.assistant";
import { authorityAssistant } from "../assistant/authorities.assistant";

export const squad : CreateSquadDTO ={
  name: "helpline to authorities",
  members: [
    {
      assistant: helplineAssistant,
      assistantDestinations: [
        {
          message: "abracadabra, I am now connecting you to the sushi authorities. Please hold on for a moment.",
          // message: "I'll connect you to the police via 999; we'll stay on the line together. Okay great, I am on the phone with an officer from {{agency}} and I've relayed the details of your situation with them. Okay they are ready to speak with you, I’ll transfer you now, take care and goodbye.",
          description: "Transfer call to Authorities assistant",
          type: "assistant",
          assistantName: "Authorities",
        }
      ]
    },
    {
      assistant: authorityAssistant,
      assistantDestinations: []
    },
  ] 
}