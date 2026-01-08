import { portfolioData } from "@/data/portfolioData";
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";

export const ContactResponse = () => {
  const { name, email, phone, social } = portfolioData;

  const contactLinks = [
    { icon: Mail, label: "Email", value: email, href: `mailto:${email}` },
    { icon: Phone, label: "Phone", value: phone, href: `tel:${phone}` },
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: social.linkedin },
    { icon: Github, label: "GitHub", href: social.github },
  ];

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-secondary">
        <h3 className="text-xl font-display font-bold text-foreground mb-1">Contacts</h3>
        <p className="text-sm text-muted-foreground mb-4">@ruparamk</p>

        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
        >
          {email}
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={social.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LeetCode
          </a>
          <a
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            X (Twitter)
          </a>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        You can reach out to me anytime! Just hit me up at{" "}
        <a href={`mailto:${email}`} className="text-primary hover:underline">
          {email}
        </a>{" "}
        or connect on social media.
      </p>

      <p className="text-sm text-muted-foreground">
        Looking forward to connecting! 🤝
      </p>
    </div>
  );
};
