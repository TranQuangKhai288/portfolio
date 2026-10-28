import { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { InView } from "./ui/in-view";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { Github, Linkedin } from "./ui/Icons";

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        state: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;

    window.open(mailtoUrl, "_blank");
    setStatus({
      state: "success",
      message: "Opening mail client with your inquiry...",
    });
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <InView>
          {/* Monolithic Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-500">
              Direct Channel
            </div>
            <h2 className="text-4xl sm:text-6xl font-semibold tracking-[-0.035em] text-neutral-900 dark:text-white leading-[1.08]">
              Let's build something remarkable together.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-[#86868B] leading-relaxed">
              I am actively discussing Senior Frontend &amp; Fullstack roles, technical advisory, and high-craft product collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Direct Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Direct Email Card */}
              <div className="p-8 rounded-3xl bg-white dark:bg-[#0A0A0E] hairline-border space-y-4 shadow-sm">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>PRIMARY INBOX</span>
                  <span className="text-emerald-500">Active</span>
                </div>
                <div className="text-lg font-semibold text-neutral-900 dark:text-white break-all">
                  {personalInfo.email}
                </div>
                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="flex-1 py-2.5 px-4 rounded-full bg-neutral-100 dark:bg-white/5 hairline-border text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all inline-flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? "Copied" : "Copy Email"}</span>
                  </button>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="py-2.5 px-5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-xs font-semibold hover:opacity-90 transition-all inline-flex items-center gap-1"
                  >
                    <span>Send</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Direct Phone / Location Card */}
              <div className="p-8 rounded-3xl bg-white dark:bg-[#0A0A0E] hairline-border space-y-4 shadow-sm">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>DIRECT TELEPHONE &amp; BASE</span>
                  <span>UTC+7</span>
                </div>
                <div className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {personalInfo.phone}
                </div>
                <div className="text-xs text-neutral-500 dark:text-[#86868B]">
                  {personalInfo.location}
                </div>
                <button
                  type="button"
                  onClick={copyPhone}
                  className="w-full py-2.5 px-4 rounded-full bg-neutral-100 dark:bg-white/5 hairline-border text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all inline-flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? "Copied Phone Number" : "Copy Phone"}</span>
                </button>
              </div>

              {/* Social Channels */}
              <div className="flex gap-3">
                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-2xl bg-white dark:bg-[#0A0A0E] hairline-border text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all inline-flex items-center justify-center gap-2 shadow-xs"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-2xl bg-white dark:bg-[#0A0A0E] hairline-border text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all inline-flex items-center justify-center gap-2 shadow-xs"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Right Message Console (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0A0A0E] hairline-border shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-50 dark:bg-black/60 hairline-border text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-50 dark:bg-black/60 hairline-border text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    Subject / Project Context
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Senior Frontend Opportunity / System Architecture"
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-50 dark:bg-black/60 hairline-border text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the engineering challenges or role..."
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-50 dark:bg-black/60 hairline-border text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                {status.message && (
                  <div
                    className={`text-xs font-mono p-3 rounded-xl ${
                      status.state === "error"
                        ? "bg-red-500/10 text-red-500 border border-red-500/20"
                        : "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold text-sm hover:opacity-90 transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Inquiry</span>
                </button>
              </form>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
};

export default Contact;
