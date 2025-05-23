import type { CreateSquadDTO } from "@vapi-ai/web/dist/api";
import { helplineAssistant, authorityAssistant } from "../assistant/character.assistant";

export const squad : CreateSquadDTO ={
  name: "helpline to authorities",
  members: [
    {
      assistant: helplineAssistant,
      assistantDestinations: [
        {
          message: "",
          description: "Transfer call to authority assistant",
          type: "assistant",
          assistantName: "authority",
        }
      ]
    },
    {
      assistant: authorityAssistant,
      assistantDestinations: []
    }
  ]
}