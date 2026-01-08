import { portfolioData } from "@/data/portfolioData";
import { Languages, Heart, Coffee, Gamepad2 } from "lucide-react";

export const FunResponse = () => {
  const { languages, education } = portfolioData;

  const funFacts = [
    { icon: Languages, text: `I speak ${languages.join(", ")}` },
    { icon: Heart, text: "Passionate about building AI that helps people" },
    { icon: Coffee, text: "Fueled by coffee and curiosity" },
    { icon: Gamepad2, text: "When not coding, I'm exploring new tech" },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-display font-bold text-foreground">Fun Facts About Me! 🎉</h3>

      <div className="space-y-4">
        {funFacts.map((fact, idx) => (
          <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
            <fact.icon className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm text-foreground">{fact.text}</span>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20">
        <h4 className="font-display font-semibold text-foreground mb-2">🎓 Currently</h4>
        <p className="text-sm text-muted-foreground">
          Pursuing {education.degree} at {education.institution}. Learning something new every day!
        </p>
      </div>

      <p className="text-sm text-muted-foreground">
        That's a bit about me beyond the code! Anything else you'd like to know? 😄
      </p>
    </div>
  );
};
