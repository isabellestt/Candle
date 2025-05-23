import type { Message, TranscriptMessage } from '../../types/conversation.type'
import { MessageEnum } from "../../types/conversation.type";
import { ConversationMessage } from "./ConversationMessage";
import FunctionCallResult from "./FunctionCallResult";

interface MessageListProps {
  messages: Message[];
  activeTranscript?: TranscriptMessage | null;
}

export function MessageList({ messages, activeTranscript }: MessageListProps) {
  return (
    <>
      {messages.map((message, index) =>
        message.type === MessageEnum.TRANSCRIPT ? (
          <ConversationMessage
            message={message}
            key={message.type + message?.role + index}
          />
        ) : message.type === MessageEnum.FUNCTION_CALL_RESULT ? (
          <FunctionCallResult key={message.type + index} message={message} />
        ) : null
      )}
      {activeTranscript ? (
        <ConversationMessage message={activeTranscript} />
      ) : null}
    </>
  );
}