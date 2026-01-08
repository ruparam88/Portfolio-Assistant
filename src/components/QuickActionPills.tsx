import { User, FolderOpen, Layers, Code2, Mail, Smile, Github } from "lucide-react";

interface QuickActionPillsProps {
  onSelect: (action: string) => void;
  showPills: boolean;
  onToggle: () => void;
}

const actions = [
  { id: "me", label: "Me", icon: User, color: "text-emerald-500" },
  { id: "projects", label: "Projects", icon: FolderOpen, color: "text-amber-500" },
  { id: "skills", label: "Skills", icon: Layers, color: "text-teal-500" },
  { id: "leetcode", label: "LeetCode", icon: Code2, color: "text-orange-500" },
  { id: "github", label: "GitHub", icon: Github, color: "text-violet-500" },
  { id: "contact", label: "Contact", icon: Mail, color: "text-rose-500" },
];

export const QuickActionPills = ({ onSelect, showPills, onToggle }: QuickActionPillsProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={onToggle}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
      >
        {showPills ? "▼" : "▲"} {showPills ? "Hide" : "Show"} quick questions
      </button>
      
      {showPills && (
        <div className="flex flex-wrap justify-center gap-2 animate-fade-in">
          {actions.map((action) => (
            <button
              key={action.id}
              onClick={() => onSelect(action.id)}
              className="quick-action-pill group"
            >
              <action.icon className={`w-4 h-4 ${action.color} transition-transform group-hover:scale-110`} />
              <span>{action.label}</span>
            </button>
          ))}
          <button
            onClick={() => onSelect("fun")}
            className="quick-action-pill group"
          >
            <Smile className="w-4 h-4 text-purple-500 transition-transform group-hover:scale-110" />
          </button>
        </div>
      )}
    </div>
  );
};
