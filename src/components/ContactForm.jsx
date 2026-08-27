import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { profile, formspreeEndpoint } from "../data/profile.js";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "Message can't be empty.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (!formspreeEndpoint) {
      // Fallback: open the user's email client with a pre-filled message.
      const mailBody = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      const mailSubject = encodeURIComponent(form.subject || `Portfolio contact from ${form.name}`);
      window.location.href = `mailto:${profile.email}?subject=${mailSubject}&body=${mailBody}`;
      setStatus("success");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const fieldClass = (hasError) =>
    `w-full rounded-md bg-bg-elevated border px-4 py-3 text-base text-text placeholder:text-muted/60 focus:border-accent outline-none transition-colors ${hasError ? "border-red-400" : "border-border"
    }`;

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-border bg-surface p-6 space-y-4"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block font-mono text-xs text-muted mb-1.5">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={fieldClass(errors.name)}
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block font-mono text-xs text-muted mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={fieldClass(errors.email)}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block font-mono text-xs text-muted mb-1.5">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className={fieldClass(false)}
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-mono text-xs text-muted mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={fieldClass(errors.message)}
          placeholder="Tell me a bit about the opportunity..."
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full bg-accent text-bg font-sans text-sm font-semibold shadow-glow-sm hover:brightness-110 transition-[filter] disabled:opacity-60"
      >
        {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
        Send Message
      </button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-ok text-sm font-mono">
          <CheckCircle2 size={16} /> Thanks — your message is on its way.
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-red-400 text-sm font-mono">
          <AlertCircle size={16} /> Something went wrong. Try emailing directly instead.
        </p>
      )}
    </motion.form>
  );
}
