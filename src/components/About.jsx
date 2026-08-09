import { motion } from "framer-motion";
import { User } from "lucide-react";
import { profile } from "../data/profile.js";
import SectionHeading from "./SectionHeading.jsx";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="max-w-content mx-auto">
        <SectionHeading eyebrow="01 — about" title="About Me" />

        <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg overflow-hidden border border-border bg-surface aspect-square grid place-items-center"
          >
            {profile.profileImage ? (
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextSibling.style.display = "grid";
                }}
              />
            ) : null}
            <div
              className="w-full h-full hidden place-items-center text-muted"
              style={{ display: profile.profileImage ? "none" : "grid" }}
            >
              <User size={64} strokeWidth={1} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-text text-base md:text-lg leading-relaxed">
              {profile.aboutDescription}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Areas of interest", "Career objective"].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-border text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
