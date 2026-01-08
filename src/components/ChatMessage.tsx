import { ReactNode } from "react";

interface ChatMessageProps {
  type: "user" | "bot";
  children: ReactNode;
}

export const ChatMessage = ({ type, children }: ChatMessageProps) => {
  const isUser = type === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} animate-slide-up`}>
      <div
        className={`max-w-[85%] md:max-w-[75%] px-5 py-3 rounded-2xl ${
          isUser
            ? "chat-bubble-user rounded-br-md"
            : "chat-bubble-bot rounded-bl-md"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export const TypingIndicator = () => (
  <div className="flex justify-start animate-fade-in">
    <div className="chat-bubble-bot px-5 py-4 rounded-2xl rounded-bl-md">
      <div className="typing-indicator flex gap-1">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
);
