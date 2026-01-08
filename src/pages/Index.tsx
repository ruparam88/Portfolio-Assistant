import { useState } from "react";
import { Avatar3D } from "@/components/Avatar3D";
import { ChatContainer } from "@/components/ChatContainer";
import { portfolioData } from "@/data/portfolioData";
import { Info } from "lucide-react";

const Index = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Hero Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-40 pointer-events-none" />
      
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-4 md:px-8 py-4">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card shadow-card">
          <div className="w-5 h-5 rounded bg-foreground flex items-center justify-center">
            <span className="text-background text-xs font-bold">R</span>
          </div>
          <span className="text-sm font-medium text-foreground">{portfolioData.name}</span>
        </div>

        <button
          onClick={() => setShowInfo(!showInfo)}
          className="w-8 h-8 rounded-full border border-border bg-card flex items-center justify-center
                     hover:bg-secondary transition-colors shadow-card"
        >
          <Info className="w-4 h-4 text-muted-foreground" />
        </button>
      </header>

      {/* Info Panel */}
      {showInfo && (
        <div className="absolute top-16 right-4 md:right-8 z-20 w-72 p-4 rounded-xl bg-card border border-border shadow-soft animate-fade-in">
          <h4 className="font-display font-semibold text-foreground mb-2">About this Portfolio</h4>
          <p className="text-sm text-muted-foreground">
            This is an AI-style chatbot portfolio. Ask questions or use the quick action buttons to explore!
          </p>
          <button
            onClick={() => setShowInfo(false)}
            className="mt-3 text-xs text-primary hover:underline"
          >
            Close
          </button>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col max-w-3xl mx-auto w-full ">
        {/* Hero Section */}
        <div className="flex flex-col items-center pt-8 pb-6 px-4">
          <Avatar3D size="xl" />
          
          <div className="mt-6 text-center">
            <h1 className="text-lg md:text-xl font-display font-medium text-foreground">
              Hey, I'm {portfolioData.name.split(" ")[0]} 👋
            </h1>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-1">
              AI Portfolio
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-md">
              {portfolioData.title}
            </p>
          </div>
        </div>

        {/* Chat Section */}
        <div className="flex-1 flex flex-col min-h-0">
          <ChatContainer />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-3 text-center">
        <p className="text-xm text-muted-foreground">
          Trained to be accurate😊. Deployed to be confident😎.
        </p>
      </footer>
    </div>
  );
};

export default Index;
