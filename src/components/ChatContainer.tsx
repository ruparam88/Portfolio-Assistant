import { useState, useRef, useEffect, ReactNode } from "react";
import { ChatMessage, TypingIndicator } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { QuickActionPills } from "./QuickActionPills";
import { AboutMeResponse } from "./responses/AboutMeResponse";
import { ProjectsResponse } from "./responses/ProjectsResponse";
import { SkillsResponse } from "./responses/SkillsResponse";
import { LeetCodeResponse } from "./responses/LeetCodeResponse";
import { ContactResponse } from "./responses/ContactResponse";
import { FunResponse } from "./responses/FunResponse";
import { GitHubResponse } from "./responses/GitHubResponse";
import { portfolioData } from "@/data/portfolioData";

interface Message {
  id: number;
  type: "user" | "bot";
  content: ReactNode;
}

const getQuickActionResponse = (action: string): ReactNode => {
  switch (action) {
    case "me":
      return <AboutMeResponse />;
    case "projects":
      return <ProjectsResponse />;
    case "skills":
      return <SkillsResponse />;
    case "leetcode":
      return <LeetCodeResponse />;
    case "github":
      return <GitHubResponse />;
    case "contact":
      return <ContactResponse />;
    case "fun":
      return <FunResponse />;
    default:
      return <AboutMeResponse />;
  }
};

const getQuickActionQuery = (action: string): string => {
  switch (action) {
    case "me":
      return "Tell me about yourself";
    case "projects":
      return "What are your projects?";
    case "skills":
      return "What are your skills?";
    case "leetcode":
      return "Show me your LeetCode stats";
    case "github":
      return "Show me your GitHub profile";
    case "contact":
      return "How can I contact you?";
    case "fun":
      return "Tell me something fun about you!";
    default:
      return "Tell me about yourself";
  }
};

const getFreeformResponse = (message: string): ReactNode => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes("project") || lowerMessage.includes("work") || lowerMessage.includes("built")) {
    return <ProjectsResponse />;
  }
  if (lowerMessage.includes("skill") || lowerMessage.includes("tech") || lowerMessage.includes("know") || lowerMessage.includes("stack")) {
    return <SkillsResponse />;
  }
  if (lowerMessage.includes("leetcode") || lowerMessage.includes("dsa") || lowerMessage.includes("algorithm") || lowerMessage.includes("problem")) {
    return <LeetCodeResponse />;
  }
  if (lowerMessage.includes("github") || lowerMessage.includes("contribution") || lowerMessage.includes("repo") || lowerMessage.includes("commit")) {
    return <GitHubResponse />;
  }
  if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("reach") || lowerMessage.includes("hire") || lowerMessage.includes("connect")) {
    return <ContactResponse />;
  }
  if (lowerMessage.includes("fun") || lowerMessage.includes("hobby") || lowerMessage.includes("interest") || lowerMessage.includes("free time")) {
    return <FunResponse />;
  }
  if (lowerMessage.includes("hi") || lowerMessage.includes("hello") || lowerMessage.includes("hey")) {
    return (
      <div className="space-y-2">
        <p>Hey there! 👋 Nice to meet you!</p>
        <p className="text-sm text-muted-foreground">
          I'm {portfolioData.name}, an AI/ML developer. Feel free to ask about my projects, skills, or LeetCode journey!
        </p>
      </div>
    );
  }
  if (lowerMessage.includes("experience") || lowerMessage.includes("background") || lowerMessage.includes("who") || lowerMessage.includes("about")) {
    return <AboutMeResponse />;
  }
  if (lowerMessage.includes("hackathon")) {
    return <ProjectsResponse />;
  }
  if (lowerMessage.includes("education") || lowerMessage.includes("study") || lowerMessage.includes("college") || lowerMessage.includes("degree")) {
    return (
      <div className="space-y-3">
        <h3 className="text-lg font-display font-bold text-foreground">🎓 Education</h3>
        <div className="p-4 rounded-xl bg-secondary">
          <p className="font-medium text-foreground">{portfolioData.education.degree}</p>
          <p className="text-sm text-muted-foreground">{portfolioData.education.institution}</p>
          <p className="text-xs text-muted-foreground mt-1">{portfolioData.education.period}</p>
        </div>
        <div className="p-4 rounded-xl bg-secondary">
          <p className="font-medium text-foreground">{portfolioData.education.preUniversity.course}</p>
          <p className="text-sm text-muted-foreground">{portfolioData.education.preUniversity.institution}</p>
          <p className="text-xs text-muted-foreground mt-1">{portfolioData.education.preUniversity.period}</p>
        </div>
      </div>
    );
  }
  if (lowerMessage.includes("certificate") || lowerMessage.includes("certification")) {
    return <SkillsResponse />;
  }

  // Default response
  return (
    <div className="space-y-2">
      <p>Great question! 🤔</p>
      <p className="text-sm text-muted-foreground">
        I'd love to tell you more! Try asking about my projects, skills, LeetCode journey, or just say hi! 
        You can also use the quick action buttons below.
      </p>
    </div>
  );
};

export const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showPills, setShowPills] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const addBotResponse = (response: ReactNode) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), type: "bot", content: response },
      ]);
    }, 800);
  };

  const handleQuickAction = (action: string) => {
    const query = getQuickActionQuery(action);
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), type: "user", content: query },
    ]);
    addBotResponse(getQuickActionResponse(action));
  };

  const handleSendMessage = (message: string) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), type: "user", content: message },
    ]);
    addBotResponse(getFreeformResponse(message));
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} type={message.type}>
            {message.content}
          </ChatMessage>
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="flex-shrink-0 p-4 space-y-4 bg-background/80 backdrop-blur-sm border-t border-border/50">
        <QuickActionPills
          onSelect={handleQuickAction}
          showPills={showPills}
          onToggle={() => setShowPills(!showPills)}
        />
        <ChatInput onSend={handleSendMessage} disabled={isTyping} />
      </div>
    </div>
  );
};
