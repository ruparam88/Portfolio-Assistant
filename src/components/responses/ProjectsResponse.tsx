import { portfolioData } from "@/data/portfolioData";
import { ExternalLink, Github } from "lucide-react";

export const ProjectsResponse = () => {
  const { projects, hackathons } = portfolioData;

  const handleProjectClick = (githubUrl: string | null) => {
    if (githubUrl) {
      window.open(githubUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-display font-bold text-foreground mb-4">My Projects</h3>
        
        <div className="grid gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.github)}
              className={`group p-4 rounded-xl bg-card border border-border hover:border-primary/30 
                         transition-all duration-300 hover:shadow-soft ${
                           project.github ? "cursor-pointer" : "cursor-default"
                         }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h4 className="font-display font-semibold text-foreground mt-1 group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    {project.github ? (
                      <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    ) : (
                      <span className="text-xs font-normal text-muted-foreground">(Coming Soon)</span>
                    )}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.github && (
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-border">
        <h4 className="font-display font-semibold text-foreground mb-3">🏆 Hackathon Experience</h4>
        <div className="space-y-3">
          {hackathons.map((hackathon) => (
            <div key={hackathon.name} className="p-3 rounded-lg bg-secondary/50">
              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground">{hackathon.name}</span>
                <span className="text-xs text-muted-foreground">{hackathon.date}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{hackathon.project}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        Want to dive deeper into any specific project? Just ask! 🚀
      </p>
    </div>
  );
};
