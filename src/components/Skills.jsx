import { motion } from "framer-motion";
import { skills } from "../data/skills.js";
import { sections } from "../data/sections.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Skills() {
  if (!sections.skills) return null;

  return (
    <section id="skills" className="section-pad bg-bg-elevated/40">
      <div className="max-w-content mx-auto">
        <SectionHeading eyebrow="02 — skills" title="Skills & Tools" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -3 }}
              className="rounded-xl border border-border bg-surface p-5 transition-shadow hover:shadow-glow-sm"
            >
              <h3 className="font-display text-sm text-accent mb-3">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-2.5 py-1.5 rounded-full border border-border text-muted hover:text-text hover:border-accent transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
