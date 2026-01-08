import { portfolioData } from "@/data/portfolioData";
import { MapPin, GraduationCap } from "lucide-react";

export const AboutMeResponse = () => {
  const data = portfolioData;

  const tags = ["AI/ML", "Full-Stack", "React", "Python", "Problem Solver"];

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <div className="flex-1 space-y-3">
          <div>
            <h3 className="text-xl font-display font-bold text-foreground">{data.name}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{data.location}</span>
            </div>
          </div>

          <p className="text-sm leading-relaxed whitespace-pre-line">
            {data.bio}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span key={tag} className="skill-badge">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
        <GraduationCap className="w-4 h-4" />
        <span>{data.education.degree} @ {data.education.institution}</span>
      </div>

      <p className="text-sm text-muted-foreground pt-2">
        What would you like to know more about? My projects, skills, or LeetCode journey? 😊
      </p>
    </div>
  );
};
