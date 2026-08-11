import { internships } from "../data/internships.js";
import SectionHeading from "./SectionHeading.jsx";
import InternshipCard from "./InternshipCard.jsx";
import { sections } from "../data/sections.js";
// ...add to the existing imports


export default function InternshipsSection() {
    return (
        <section id="internships" className="section-pad bg-bg-elevated/40">
            <div className="max-w-content mx-auto">
                <SectionHeading
                    eyebrow="internships"
                    title="Internships"
                    description="Places I've interned and what I worked on."
                />

                {internships.length === 0 ? (
                    <p className="text-muted font-mono text-sm border border-dashed border-border rounded-lg p-8 text-center">
                        No internships added yet.
                    </p>
                ) : (
                    <div className="grid sm:grid-cols-2 gap-5">
                        {internships.map((item, i) => (
                            <InternshipCard key={item.company + item.role} internship={item} index={i} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}