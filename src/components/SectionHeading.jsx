import { motion } from "framer-motion";

// A quiet accent dot + label above every section title, echoing the node
// motif from the hero without repeating the "code comment" styling.
export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mb-12"
    >
      <p className="eyebrow mb-3 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        {eyebrow}
      </p>
      <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-text">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
