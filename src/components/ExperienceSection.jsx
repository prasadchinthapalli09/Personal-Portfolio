import { experience } from "../data/experience.js";
import { sections } from "../data/sections.js";
import SectionHeading from "./SectionHeading.jsx";
import Experience from "./Experience.jsx";

// Standalone Internships / Work Experience section — its own nav tab,
// separate from the Resume (PDF) section.
export default function ExperienceSection() {
  if (!sections.experience) return null;

  return (
    <section id="experience" className="section-pad">
      <div className="max-w-content mx-auto">
        <SectionHeading
          eyebrow="03 — experience"
          title="Internships & Work Experience"
          description="Roles I've worked in, and what I did in each."
        />

        {experience.length > 0 ? (
          <Experience />
        ) : (
          <p className="text-muted font-mono text-sm border border-dashed border-border rounded-lg p-8 text-center">
            No experience added yet.
          </p>
        )}
      </div>
    </section>
  );
}
