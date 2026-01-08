import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ExternalLink, GitBranch, Star, Users, BookOpen } from "lucide-react";

interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  avatarUrl: string;
  bio: string | null;
  createdAt: string;
}

interface GitHubRepo {
  name: string;
  description: string | null;
  stars: number;
  forks: number;
  language: string | null;
  url: string;
  updatedAt: string;
}

export const GitHubResponse = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const username = "ruparam88";

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        
        // Fetch user profile
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error("Failed to fetch GitHub profile");
        const userData = await userResponse.json();
        
        setStats({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          avatarUrl: userData.avatar_url,
          bio: userData.bio,
          createdAt: userData.created_at,
        });

        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );
        if (!reposResponse.ok) throw new Error("Failed to fetch repositories");
        const reposData = await reposResponse.json();
        
        setRepos(
          reposData.map((repo: any) => ({
            name: repo.name,
            description: repo.description,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language,
            url: repo.html_url,
            updatedAt: repo.updated_at,
          }))
        );

        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch data");
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-display font-bold text-foreground">GitHub Profile</h3>
        <div className="animate-pulse space-y-4">
          <div className="h-20 bg-secondary rounded-xl" />
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-secondary rounded-lg" />
            ))}
          </div>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 bg-secondary rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-display font-bold text-foreground">GitHub Profile</h3>
        <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20">
          <p className="text-destructive">Unable to load GitHub data. Please try again later.</p>
        </div>
        <a
          href={portfolioData.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <span>Visit GitHub Profile</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    );
  }

  const memberSince = stats?.createdAt 
    ? new Date(stats.createdAt).getFullYear() 
    : "2020";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-display font-bold text-foreground">GitHub Profile</h3>
        <a
          href={portfolioData.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline flex items-center gap-1"
        >
          @{username}
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* GitHub Contribution Graph */}
      <div className="rounded-xl overflow-hidden border border-border">
        <img
          src={`https://ghchart.rshah.org/6366f1/${username}`}
          alt="GitHub Contribution Graph"
          className="w-full"
        />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 text-center">
          <BookOpen className="w-5 h-5 mx-auto mb-1 text-primary" />
          <span className="block text-xl font-bold text-foreground">{stats?.publicRepos || 0}</span>
          <span className="text-xs text-muted-foreground">Repos</span>
        </div>
        <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 border border-amber-500/20 text-center">
          <Users className="w-5 h-5 mx-auto mb-1 text-amber-500" />
          <span className="block text-xl font-bold text-foreground">{stats?.followers || 0}</span>
          <span className="text-xs text-muted-foreground">Followers</span>
        </div>
        <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/20 text-center">
          <GitBranch className="w-5 h-5 mx-auto mb-1 text-emerald-500" />
          <span className="block text-xl font-bold text-foreground">{memberSince}</span>
          <span className="text-xs text-muted-foreground">Since</span>
        </div>
      </div>

      {/* Recent Repositories */}
      <div>
        <h4 className="font-display font-semibold text-foreground mb-3">Recent Repositories</h4>
        <div className="space-y-2">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-lg bg-card border border-border hover:border-primary/30 
                         transition-all duration-300 hover:shadow-soft group"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h5 className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                    {repo.name}
                  </h5>
                  {repo.description && (
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                      {repo.description}
                    </p>
                  )}
                  <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitBranch className="w-3 h-3" />
                      {repo.forks}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        📊 Data updates in real-time from GitHub API!
      </p>
    </div>
  );
};
