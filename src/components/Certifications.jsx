import { useState } from "react";
import { certifications } from "../data/certifications.js";
import { sections } from "../data/sections.js";
import SectionHeading from "./SectionHeading.jsx";
import CertificateCard from "./CertificateCard.jsx";
import CertificateViewer from "./CertificateViewer.jsx";

export default function Certifications() {
  const [previewCert, setPreviewCert] = useState(null);
  if (!sections.certifications) return null;

  return (
    <section id="certifications" className="section-pad">
      <div className="max-w-content mx-auto">
        <SectionHeading eyebrow="05 — certifications" title="Certifications" />

        {certifications.length === 0 ? (
          <p className="text-muted font-mono text-sm border border-dashed border-border rounded-lg p-8 text-center">
            No certifications added yet.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert) => (
              <CertificateCard key={cert.title + cert.date} cert={cert} onPreview={() => setPreviewCert(cert)} />
            ))}
          </div>
        )}
      </div>

      <CertificateViewer cert={previewCert} onClose={() => setPreviewCert(null)} />
    </section>
  );
}
