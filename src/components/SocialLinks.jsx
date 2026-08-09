import { Github, Linkedin, Mail, Twitter, Instagram, Youtube } from "lucide-react";
import { profile } from "../data/profile.js";

const LINKS = [
  { key: "github", href: profile.github, icon: Github, label: "GitHub" },
  { key: "linkedin", href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
  { key: "email", href: profile.email ? `mailto:${profile.email}` : "", icon: Mail, label: "Email" },
  { key: "twitter", href: profile.twitter, icon: Twitter, label: "X / Twitter" },
  { key: "instagram", href: profile.instagram, icon: Instagram, label: "Instagram" },
  { key: "youtube", href: profile.youtube, icon: Youtube, label: "YouTube" },
];

export default function SocialLinks({ className = "" }) {
  const active = LINKS.filter((l) => l.href);

  if (active.length === 0) return null;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {active.map(({ key, href, icon: Icon, label }) => (
        <a
          key={key}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          aria-label={label}
          title={label}
          className="w-10 h-10 grid place-items-center rounded-full border border-border bg-surface text-muted hover:text-accent hover:border-accent hover:shadow-glow-sm transition-all"
        >
          <Icon size={18} strokeWidth={1.75} />
        </a>
      ))}
    </div>
  );
}
