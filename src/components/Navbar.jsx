import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/profile.js";
import { sections } from "../data/sections.js";
import { useActiveSection } from "../hooks/useActiveSection.js";
import ThemeToggle from "./ThemeToggle.jsx";
import SocialLinks from "./SocialLinks.jsx";

const TABS = [
  { id: "about", label: "About" },
  ...(sections.resume ? [{ id: "resume", label: "Resume" }] : []),
  { id: "projects", label: "Projects" },
  ...(sections.internships ? [{ id: "internships", label: "Internships" }] : []),
  ...(sections.certifications ? [{ id: "certifications", label: "Certifications" }] : []),
  { id: "contact", label: "Contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(TABS.map((t) => t.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const initial = profile.name?.trim()?.[0]?.toUpperCase() || "•";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? "bg-bg-elevated/85 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
    >
      <nav className="max-w-content mx-auto px-4 md:px-6" aria-label="Primary">
        <div className="flex items-center h-16 gap-4">
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, "top")}
            className="flex items-center gap-2.5 whitespace-nowrap"
          >
            <span className="w-8 h-8 rounded-full bg-accent text-bg grid place-items-center font-display font-bold text-sm">
              {initial}
            </span>
            <span className="font-display text-sm font-semibold text-text hidden sm:inline">
              {profile.name}
            </span>
          </a>

          {/* desktop nav — a pill that glides to the active section */}
          <ul className="hidden md:flex items-center gap-1 ml-4 flex-1">
            {TABS.map(({ id, label }) => {
              const isActive = activeId === id;
              return (
                <li key={id} className="relative">
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleNavClick(e, id)}
                    className={`relative z-10 block px-4 py-2 rounded-full font-sans text-sm transition-colors whitespace-nowrap ${isActive ? "text-bg font-medium" : "text-muted hover:text-text"
                      }`}
                  >
                    {label}
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex items-center gap-2 ml-auto">
            <SocialLinks />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          <button
            className="md:hidden ml-auto w-10 h-10 grid place-items-center text-text"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-bg-elevated border-b border-border"
          >
            <ul className="px-4 py-2">
              {TABS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleNavClick(e, id)}
                    className={`block py-3 font-sans text-sm border-b border-border/60 last:border-b-0 ${activeId === id ? "text-accent font-medium" : "text-muted"
                      }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between px-4 py-4 border-t border-border">
              <SocialLinks />
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
