import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Github, ExternalLink, ImageOff } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] grid place-items-center p-4 backdrop-blur-sm"
          style={{ background: "rgba(14, 11, 26, 0.72)" }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-border bg-surface shadow-glow"
          >
            <div className="sticky top-0 flex items-center justify-between px-6 py-4 border-b border-border bg-surface z-10">
              <h3 id="project-modal-title" className="font-display text-base font-semibold text-text">
                {project.title}
              </h3>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label="Close project details"
                className="w-8 h-8 grid place-items-center rounded-full text-muted hover:text-text hover:bg-bg-elevated transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="aspect-video bg-bg-elevated border-b border-border grid place-items-center overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextSibling.style.display = "grid";
                  }}
                />
              ) : null}
              <div
                className="w-full h-full hidden place-items-center text-muted"
                style={{ display: project.image ? "none" : "grid" }}
              >
                <ImageOff size={32} strokeWidth={1} />
              </div>
            </div>

            <div className="p-5 space-y-5">
              <p className="text-muted text-sm leading-relaxed">{project.description}</p>

              {project.details?.problem && (
                <div>
                  <p className="eyebrow mb-1">Problem</p>
                  <p className="text-text text-sm leading-relaxed">{project.details.problem}</p>
                </div>
              )}

              {project.details?.solution && (
                <div>
                  <p className="eyebrow mb-1">Solution</p>
                  <p className="text-text text-sm leading-relaxed">{project.details.solution}</p>
                </div>
              )}

              {project.details?.features?.length > 0 && (
                <div>
                  <p className="eyebrow mb-2">Features</p>
                  <ul className="space-y-1.5">
                    {project.details.features.map((f) => (
                      <li key={f} className="text-text text-sm flex gap-2">
                        <span className="text-accent">▸</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <p className="eyebrow mb-2">Technologies</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span key={t} className="font-mono text-[11px] px-2 py-1 rounded border border-border text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-text font-sans text-xs font-medium hover:border-accent hover:text-accent transition-colors"
                  >
                    <Github size={14} /> GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-bg font-sans text-xs font-semibold shadow-glow-sm hover:brightness-110 transition-[filter]"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
