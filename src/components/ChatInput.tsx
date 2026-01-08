import { useState } from "react";
import { ArrowUp } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me anything..."
          disabled={disabled}
          className="w-full px-6 py-4 pr-14 rounded-full border border-border bg-card 
                     text-foreground placeholder:text-muted-foreground
                     focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                     transition-all duration-200 shadow-card disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={!message.trim() || disabled}
          className="absolute right-2 w-10 h-10 rounded-full gradient-primary 
                     flex items-center justify-center shadow-button
                     transition-all duration-200 hover:scale-105 
                     disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <ArrowUp className="w-5 h-5 text-primary-foreground" />
        </button>
      </div>
    </form>
  );
};
