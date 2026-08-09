import { motion } from "framer-motion";
import { Eye, Download, FileText } from "lucide-react";
import { profile } from "../data/profile.js";
import { sections } from "../data/sections.js";
import { experience } from "../data/experience.js";
import SectionHeading from "./SectionHeading.jsx";
import Experience from "./Experience.jsx";

export default function Resume() {
  if (!sections.resume) return null;
  const hasResume = Boolean(profile.resume);

  return (
    <section id="resume" className="section-pad">
      <div className="max-w-content mx-auto">
        <SectionHeading
          eyebrow="03 — resume"
          title="Resume & Experience"
          description="A quick look at my background, or grab the full PDF."
        />

        <div className="grid md:grid-cols-[1fr_320px] gap-8 items-start">
          {sections.experience && experience.length > 0 ? (
            <Experience />
          ) : (
            <div className="rounded-lg border border-dashed border-border p-8 text-center text-muted font-mono text-sm">
              No experience added yet.
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-border bg-surface p-6 sticky top-24"
          >
            <div className="w-full aspect-[3/4] rounded-md border border-border bg-bg-elevated grid place-items-center mb-5">
              <FileText size={40} strokeWidth={1} className="text-muted" />
            </div>

            {hasResume ? (
              <div className="flex flex-col gap-2">
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-border text-text font-sans text-sm font-medium hover:border-accent hover:text-accent transition-colors"
                >
                  <Eye size={16} /> View Resume
                </a>
                <a
                  href={profile.resume}
                  download
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-accent text-bg font-sans text-sm font-semibold shadow-glow-sm hover:brightness-110 transition-[filter]"
                >
                  <Download size={16} /> Download Resume
                </a>
              </div>
            ) : (
              <p className="text-center text-muted font-mono text-xs">
                Resume not added yet — drop a PDF at /assets/resume/resume.pdf
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
