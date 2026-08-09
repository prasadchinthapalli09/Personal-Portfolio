import { profile } from "../data/profile.js";
import { sections } from "../data/sections.js";
import SocialLinks from "./SocialLinks.jsx";

const NAV = [
  { id: "about", label: "About" },
  ...(sections.resume ? [{ id: "resume", label: "Resume" }] : []),
  { id: "projects", label: "Projects" },
  ...(sections.certifications ? [{ id: "certifications", label: "Certifications" }] : []),
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border">
      <div className="max-w-content mx-auto px-4 md:px-6 py-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <div>
          <p className="font-display text-sm font-semibold text-text">{profile.name}</p>
          <p className="text-muted text-xs mt-1">{profile.tagline}</p>
        </div>

        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {NAV.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className="font-mono text-xs text-muted hover:text-accent transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <SocialLinks />
      </div>
      <div className="border-t border-border py-4 text-center">
        <p className="text-muted text-xs font-mono">© 2026 {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
