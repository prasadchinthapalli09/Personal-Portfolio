import { motion } from "framer-motion";
import { Award, Eye, ShieldCheck } from "lucide-react";

function isImage(url = "") {
  return /\.(png|jpe?g)$/i.test(url);
}

export default function CertificateCard({ cert, onPreview }) {
  const { title, issuer, date, credentialId, certificateUrl, credentialUrl, logo } = cert;
  const imageCert = isImage(certificateUrl);

  const handleView = (e) => {
    if (imageCert) {
      e.preventDefault();
      onPreview();
    }
    // PDFs fall through to the default <a target="_blank"> behavior
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -3 }}
      className="rounded-xl border border-border bg-surface p-5 flex flex-col transition-shadow hover:shadow-glow-sm"
    >
      <div className="flex items-center gap-3 mb-4">
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
          <Award size={20} className="text-muted" style={{ display: logo ? "none" : "block" }} />
        </div>
        <div>
          <h3 className="font-display text-sm font-semibold text-text leading-tight">{title}</h3>
          <p className="text-xs text-muted mt-0.5">{issuer}</p>
        </div>
      </div>

      <p className="text-xs text-muted font-mono">{date}</p>
      {credentialId && (
        <p className="text-xs text-muted font-mono mt-1">ID: {credentialId}</p>
      )}

      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
        {certificateUrl && (
          <a
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleView}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-text hover:text-accent transition-colors"
          >
            <Eye size={14} /> View Certificate
          </a>
        )}
        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-accent transition-colors"
          >
            <ShieldCheck size={14} /> Verify
          </a>
        )}
      </div>
    </motion.div>
  );
}
