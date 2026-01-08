import { portfolioData } from "@/data/portfolioData";
import { Code2, Server, Brain, Wrench } from "lucide-react";

const categoryIcons: Record<string, any> = {
  "Programming Languages": Code2,
  "Frontend & Backend": Server,
  "AI/ML & Database": Brain,
  "Tools & Platforms": Wrench,
};

export const SkillsResponse = () => {
  const { skills, certificates } = portfolioData;

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-display font-bold text-foreground">Skills & Expertise</h3>

      <div className="space-y-5">
        {Object.entries(skills).map(([category, skillList]) => {
          const Icon = categoryIcons[category] || Code2;
          return (
            <div key={category}>
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-4 h-4 text-muted-foreground" />
                <h4 className="font-display font-semibold text-foreground">{category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill: string) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-4 border-t border-border">
        <h4 className="font-display font-semibold text-foreground mb-3">📜 Certifications</h4>
        <ul className="space-y-2">
          {certificates.map((cert) => (
            <li key={cert} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary mt-1">•</span>
              <span>{cert}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-sm text-muted-foreground">
        Always learning, always building! Want to see my LeetCode stats or projects? 💪
      </p>
    </div>
  );
};
