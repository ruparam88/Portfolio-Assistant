import { portfolioData } from "@/data/portfolioData";
import { ExternalLink, Trophy, Target, Zap } from "lucide-react";

export const LeetCodeResponse = () => {
  const { leetcode, social } = portfolioData;

  const progressPercent = (leetcode.problemsSolved / leetcode.totalProblems) * 100;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-display font-bold text-foreground">LeetCode Stats</h3>
        <a
          href={social.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-primary hover:underline"
        >
          View Profile <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-secondary text-center">
          <div className="text-3xl font-display font-bold text-foreground">
            {leetcode.problemsSolved}
          </div>
          <div className="text-xs text-muted-foreground mt-1">Problems Solved</div>
        </div>
        <div className="p-4 rounded-xl bg-secondary text-center">
          <div className="text-3xl font-display font-bold text-primary">
            {leetcode.acceptance}
          </div>
          <div className="text-xs text-muted-foreground mt-1">Acceptance Rate</div>
        </div>
        <div className="p-4 rounded-xl bg-secondary text-center col-span-2 md:col-span-1">
          <div className="text-3xl font-display font-bold text-foreground">
            277
          </div>
          <div className="text-xs text-muted-foreground mt-1">Total Submissions</div>
        </div>
      </div>

      {/* Difficulty Breakdown */}
      <div className="space-y-3">
        <h4 className="font-display font-semibold text-foreground flex items-center gap-2">
          <Target className="w-4 h-4" /> Difficulty Breakdown
        </h4>
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center">
            <div className="text-2xl font-bold text-emerald-600">{leetcode.easy}</div>
            <div className="text-xs text-emerald-600/80">Easy</div>
          </div>
          <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-center">
            <div className="text-2xl font-bold text-amber-600">{leetcode.medium}</div>
            <div className="text-xs text-amber-600/80">Medium</div>
          </div>
          <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-center">
            <div className="text-2xl font-bold text-rose-600">{leetcode.hard}</div>
            <div className="text-xs text-rose-600/80">Hard</div>
          </div>
        </div>
      </div>

      {/* Languages Used */}
      <div className="space-y-3">
        <h4 className="font-display font-semibold text-foreground flex items-center gap-2">
          <Zap className="w-4 h-4" /> Languages Used
        </h4>
        <div className="flex flex-wrap gap-2">
          {leetcode.languages.map((lang) => (
            <span key={lang.name} className="skill-badge">
              {lang.name} ({lang.count})
            </span>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-3">
        <h4 className="font-display font-semibold text-foreground flex items-center gap-2">
          <Trophy className="w-4 h-4" /> Top Skills
        </h4>
        <div className="space-y-2">
          {Object.entries(leetcode.skills).map(([level, skills]) => (
            <div key={level} className="flex items-start gap-2">
              <span className="text-xs font-medium text-muted-foreground capitalize min-w-[80px]">
                {level}:
              </span>
              <div className="flex flex-wrap gap-1">
                {skills.map((skill: string) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-xs rounded-md bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        Grinding DSA every day! Want to know about my projects or skills? 🧑‍💻
      </p>
    </div>
  );
};
