import { motion } from "framer-motion";
import { Building2, MapPin } from "lucide-react";

export default function InternshipCard({ internship, index = 0 }) {
    const { role, company, location, startDate, endDate, remote, description, skills, logo } = internship;

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            whileHover={{ y: -3 }}
            className="rounded-xl border border-border bg-surface p-5 flex flex-col transition-shadow hover:shadow-glow-sm"
        >
            <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-md border border-border bg-bg-elevated grid place-items-center overflow-hidden flex-shrink-0">
                    {logo ? (
                        <img
                            src={logo}
                            alt=""
                            className="w-full h-full object-contain"
                            onError={(e) => {
                                e.currentTarget.style.display = "none";
                                e.currentTarget.nextSibling.style.display = "block";
                            }}
                        />
                    ) : null}
                    <Building2 size={20} className="text-muted" style={{ display: logo ? "none" : "block" }} />
                </div>

                <div className="flex-1">
                    <h3 className="font-display text-base font-semibold text-text leading-tight">{role}</h3>
                    <p className="text-sm text-accent-2 font-mono mt-0.5">{company}</p>
                </div>

                {remote && (
                    <span className="font-mono text-[10px] px-2 py-1 rounded-full border border-border text-muted flex-shrink-0">
                        Remote
                    </span>
                )}
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-3 text-xs text-muted font-mono">
                <span>{startDate} — {endDate}</span>
                {location && (
                    <span className="inline-flex items-center gap-1">
                        <MapPin size={12} /> {location}
                    </span>
                )}
            </div>

            <p className="text-muted text-base mt-3 leading-relaxed flex-1">{description}</p>

            {skills?.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                    {skills.map((s) => (
                        <span key={s} className="font-mono text-[11px] px-2 py-1 rounded-full border border-border text-muted">
                            {s}
                        </span>
                    ))}
                </div>
            )}
        </motion.div>
    );
}
