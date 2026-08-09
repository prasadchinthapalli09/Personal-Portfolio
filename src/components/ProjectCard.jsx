import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, ImageOff } from "lucide-react";

export default function ProjectCard({ project, onViewDetails }) {
  const { title, description, image, technologies, github, liveDemo, featured } = project;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
      className="group rounded-xl border border-border bg-surface overflow-hidden flex flex-col transition-shadow hover:shadow-glow-sm"
    >
      <div className="aspect-video bg-bg-elevated border-b border-border grid place-items-center overflow-hidden relative">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "grid";
            }}
          />
        ) : null}
        <div className="w-full h-full hidden place-items-center text-muted" style={{ display: image ? "none" : "grid" }}>
          <ImageOff size={28} strokeWidth={1} />
        </div>
        {featured && (
          <span className="absolute top-3 left-3 font-mono text-[10px] px-2 py-1 rounded-full bg-accent text-bg font-semibold">
            Featured
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="eyebrow mb-1">{project.category}</p>
        <h3 className="font-display text-base font-semibold text-text">{title}</h3>
        <p className="text-muted text-sm mt-2 leading-relaxed flex-1">{description}</p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {technologies.map((t) => (
            <span key={t} className="font-mono text-[11px] px-2 py-1 rounded border border-border text-muted">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-5">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} on GitHub`}
              className="w-9 h-9 grid place-items-center rounded-md border border-border text-muted hover:text-accent hover:border-accent transition-colors"
            >
              <Github size={16} />
            </a>
          )}
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live demo`}
              className="w-9 h-9 grid place-items-center rounded-md border border-border text-muted hover:text-accent hover:border-accent transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
          <button
            onClick={onViewDetails}
            className="ml-auto inline-flex items-center gap-1 font-mono text-xs text-text hover:text-accent transition-colors"
          >
            View Details <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
