import { motion } from "framer-motion";
import { highlights } from "../data/experience.js";

export default function Highlights() {
  if (!highlights || highlights.length === 0) return null;

  return (
    <div className="max-w-content mx-auto px-4 md:px-6 -mt-4 md:-mt-8 relative z-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 rounded-xl border border-border bg-surface p-4 md:p-6">
        {highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="text-center sm:text-left"
          >
            <p className="font-display text-2xl md:text-3xl font-bold text-accent">{h.value}</p>
            <p className="text-muted text-xs md:text-sm mt-1 font-mono">{h.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
