import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile.js";
import SectionHeading from "./SectionHeading.jsx";
import ContactForm from "./ContactForm.jsx";

const CONTACT_LINKS = [
  { key: "email", href: profile.email ? `mailto:${profile.email}` : "", icon: Mail, label: profile.email, cta: "Send Email" },
  { key: "github", href: profile.github, icon: Github, label: "GitHub", cta: "View GitHub" },
  { key: "linkedin", href: profile.linkedin, icon: Linkedin, label: "LinkedIn", cta: "View LinkedIn" },
];

export default function Contact() {
  const activeLinks = CONTACT_LINKS.filter((l) => l.href);

  return (
    <section id="contact" className="section-pad bg-bg-elevated/40">
      <div className="max-w-content mx-auto">
        <SectionHeading
          eyebrow="06 — contact"
          title="Let's Work Together"
          description={profile.contactDescription}
        />

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            {activeLinks.map(({ key, href, icon: Icon, label, cta }) => (
              <a
                key={key}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4 hover:border-accent hover:shadow-glow-sm transition-all group"
              >
                <span className="w-10 h-10 grid place-items-center rounded-md bg-bg-elevated border border-border text-muted group-hover:text-accent transition-colors">
                  <Icon size={18} />
                </span>
                <span>
                  <span className="block font-mono text-sm text-text">{cta}</span>
                  <span className="block text-xs text-muted mt-0.5 break-all">{label}</span>
                </span>
              </a>
            ))}
          </motion.div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
