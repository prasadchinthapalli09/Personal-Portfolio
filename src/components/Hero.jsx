import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { profile } from "../data/profile.js";
import SocialLinks from "./SocialLinks.jsx";

// A small fixed layout of "token" nodes and the edges connecting them —
// a quiet nod to embeddings/attention, generated once so it stays stable.
const NODES = [
  { x: 60, y: 46, r: 5, tone: "accent" },
  { x: 150, y: 30, r: 4, tone: "accent-2" },
  { x: 230, y: 70, r: 6, tone: "accent" },
  { x: 120, y: 120, r: 4, tone: "ok" },
  { x: 210, y: 150, r: 5, tone: "accent-2" },
  { x: 40, y: 150, r: 4, tone: "accent" },
  { x: 290, y: 130, r: 4, tone: "accent" },
  { x: 300, y: 40, r: 3, tone: "accent-2" },
];

const EDGES = [
  [0, 1],
  [1, 2],
  [0, 3],
  [3, 5],
  [3, 4],
  [2, 6],
  [4, 6],
  [1, 7],
];

const TONE_VAR = {
  accent: "var(--accent)",
  "accent-2": "var(--accent-2)",
  ok: "var(--ok)",
};

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const listener = (e) => setReduced(e.matches);
    mq.addEventListener?.("change", listener);
    return () => mq.removeEventListener?.("change", listener);
  }, []);
  return reduced;
}

function EmbeddingGraph({ reducedMotion }) {
  return (
    <svg viewBox="0 0 320 190" className="w-full h-auto" role="img" aria-label="Animated diagram of connected nodes">
      {EDGES.map(([a, b], i) => {
        const na = NODES[a];
        const nb = NODES[b];
        return (
          <motion.line
            key={i}
            x1={na.x}
            y1={na.y}
            x2={nb.x}
            y2={nb.y}
            stroke="var(--border)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: reducedMotion ? 0 : 0.3 + i * 0.08 }}
          />
        );
      })}
      {NODES.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill={TONE_VAR[n.tone]}
          initial={{ scale: 0, opacity: 0 }}
          animate={
            reducedMotion
              ? { scale: 1, opacity: 1 }
              : { scale: 1, opacity: [0.55, 1, 0.55] }
          }
          transition={
            reducedMotion
              ? { duration: 0.4, delay: i * 0.05 }
              : { duration: 2.6 + (i % 3) * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }
          }
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-6 overflow-hidden">
      {/* ambient drifting glow, quiet enough not to compete with the panel */}
      <div
        className="absolute -top-24 -right-24 w-[440px] h-[440px] rounded-full blur-3xl -z-10 animate-drift"
        style={{ background: "radial-gradient(circle, var(--accent-a30), transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-16 w-[360px] h-[360px] rounded-full blur-3xl -z-10 opacity-70 animate-drift"
        style={{ background: "radial-gradient(circle, var(--accent-2), transparent 70%)", animationDelay: "3s", opacity: 0.12 }}
        aria-hidden="true"
      />

      <div className="max-w-content mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-4 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-soft" />
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-display font-bold tracking-tight text-text text-4xl sm:text-5xl md:text-6xl leading-[1.05]"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-4 text-lg md:text-xl text-accent font-display font-medium"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-5 text-muted text-base md:text-lg leading-relaxed max-w-xl"
          >
            {profile.shortDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={profile.hero.primaryButton.link}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-bg font-sans text-sm font-semibold shadow-glow-sm hover:brightness-110 transition-[filter]"
            >
              {profile.hero.primaryButton.label}
              <ArrowRight size={16} />
            </motion.a>
            {profile.resume && (
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={profile.hero.secondaryButton.link}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-text font-sans text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
              >
                <Download size={16} />
                {profile.hero.secondaryButton.label}
              </motion.a>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-8"
          >
            <SocialLinks />
          </motion.div>
        </div>

        {/* signature element: an "embedding space" panel — nodes and edges that
            pulse gently, standing in for tokens and the connections between them */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-border bg-surface shadow-glow overflow-hidden"
        >
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-ok animate-pulse-soft" />
            <span className="font-mono text-xs text-muted tracking-wide">embedding_space.viz</span>
          </div>
          <div className="p-6">
            <EmbeddingGraph reducedMotion={reducedMotion} />
            <div className="flex flex-wrap gap-2 mt-2">
              {[profile.title, profile.location, profile.availability].filter(Boolean).map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-border text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
