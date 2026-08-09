import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn, ZoomOut } from "lucide-react";

export default function CertificateViewer({ cert, onClose }) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!cert) return;
    setZoom(1);
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [cert, onClose]);

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] backdrop-blur-sm grid place-items-center p-4"
          style={{ background: "rgba(14, 11, 26, 0.85)" }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${cert.title} certificate preview`}
        >
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoom((z) => Math.min(z + 0.25, 2.5));
              }}
              aria-label="Zoom in"
              className="w-10 h-10 grid place-items-center rounded-full bg-surface border border-border text-text hover:text-accent hover:border-accent transition-colors"
            >
              <ZoomIn size={18} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoom((z) => Math.max(z - 0.25, 0.5));
              }}
              aria-label="Zoom out"
              className="w-10 h-10 grid place-items-center rounded-full bg-surface border border-border text-text hover:text-accent hover:border-accent transition-colors"
            >
              <ZoomOut size={18} />
            </button>
            <button
              onClick={onClose}
              aria-label="Close preview"
              className="w-10 h-10 grid place-items-center rounded-full bg-surface border border-border text-text hover:text-accent hover:border-accent transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <motion.img
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            src={cert.certificateUrl}
            alt={cert.title}
            style={{ transform: `scale(${zoom})` }}
            className="max-w-full max-h-[80vh] object-contain rounded-md transition-transform duration-200"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
