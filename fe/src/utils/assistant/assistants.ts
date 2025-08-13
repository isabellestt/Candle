import { helplineAssistant } from "./helpline.assistant";
import { noahAssistant } from "./noah.assistant";

export const getAssistantByName = (name: string) => {
    if (name === "noah") {
        return noahAssistant;
    }
    return helplineAssistant;
};
