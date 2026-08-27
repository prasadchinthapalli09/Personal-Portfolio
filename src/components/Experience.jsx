import { motion } from "framer-motion";
import { experience } from "../data/experience.js";

export default function Experience() {
  return (
    <ol className="relative border-l border-border pl-6 space-y-8">
      {experience.map((item, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="relative"
        >
          <span className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
          <p className="font-mono text-xs text-muted">
            {item.startDate} — {item.endDate}
          </p>
          <h3 className="font-display text-base md:text-lg font-semibold text-text mt-1">
            {item.title}
          </h3>
          <p className="text-sm text-accent-2 font-mono mt-0.5">
            {item.organization} · {item.location}
          </p>
          <p className="text-muted text-base mt-2 leading-relaxed">{item.description}</p>
          <span className="inline-block mt-2 font-mono text-[11px] px-2 py-0.5 rounded-full border border-border text-muted">
            {item.type}
          </span>
        </motion.li>
      ))}
    </ol>
  );
}
