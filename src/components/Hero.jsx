import { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { useCvModal } from "../contexts/CvContext";
import { InView } from "./ui/in-view";
import {
  ArrowDown,
  Copy,
  Check,
  FileText,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Github, Linkedin } from "./ui/Icons";

const coreSpecializations = [
  "React 19",
  "TypeScript",
  "Cloudflare Edge",
  "Redis & WebSockets",
  "TanStack Query",
  "Model Context Protocol (MCP)",
];

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const { openCvModal } = useCvModal();

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden">
      {/* Subtle Ambient Backlight Glow */}
      <div className="absolute top-1/4 right-1/4 w-[750px] h-[650px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Unified Stage Container */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative w-full">
        
        {/* ═══════════════════════════════════════════════════════
            ATMOSPHERIC BACKGROUND PORTRAIT (Shifted Right, Underneath Text)
           ═══════════════════════════════════════════════════════ */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] sm:w-[62%] md:w-[65%] lg:w-[68%] xl:w-[70%] h-[580px] sm:h-[680px] lg:h-[760px] pointer-events-none select-none z-0 flex items-center justify-end">
          <div className="relative w-full h-full flex items-center justify-end">
            {/* The Photo - Clearer, Brighter & Crisper */}
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-full h-full object-cover object-[center_20%] filter contrast-[1.05] brightness-[1.08] opacity-100 dark:opacity-95 hero-overlay-portrait pointer-events-none"
            />

            {/* Smooth Edge Feathering & Contrast Veils - Gentler, Lighter Fading */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA] via-[#FAFAFA]/50 via-25% to-transparent dark:from-[#000000] dark:via-[#000000]/45 dark:via-25% to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FAFAFA] to-transparent dark:from-[#000000] dark:to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FAFAFA] to-transparent dark:from-[#000000] dark:to-transparent pointer-events-none" />
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════
            FOREGROUND TYPOGRAPHY LAYER (Directly Overlapping Photo)
           ═══════════════════════════════════════════════════════ */}
        <InView>
          <div className="relative z-10 max-w-2xl sm:max-w-3xl lg:max-w-3xl space-y-7">
            
            {/* Status Capsule */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-[#0A0A0E]/80 hairline-border shadow-xs backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
                Available for Senior / Frontend Roles
              </span>
              <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 pl-1">
                ICT (UTC+7)
              </span>
            </div>

            {/* Monolithic Title & Identity - Boldly Extending Over Photo */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-widest">
                <span className="text-neutral-900 dark:text-neutral-100 font-semibold">
                  {personalInfo.name}
                </span>
                <span>·</span>
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  Software Engineer
                </span>
                <span>·</span>
                <span className="flex items-center gap-1 text-emerald-500">
                  <MapPin className="w-3 h-3" />
                  HCMC
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-semibold tracking-[-0.035em] text-neutral-900 dark:text-white leading-[1.05]">
                Crafting high-precision interfaces &amp; resilient systems at scale.
              </h1>
            </div>

            {/* Supporting Description Overlapping Image */}
            <p className="text-base sm:text-lg text-neutral-700 dark:text-[#A1A1A6] leading-relaxed font-normal max-w-xl">
              ~2 years of verified engineering practice across{" "}
              <span className="text-neutral-900 dark:text-neutral-100 font-medium">
                React 19, TypeScript, and distributed serverless runtimes
              </span>
              . Specialized in high-concurrency booking engines, edge WebSockets, and autonomous MCP developer tooling.
            </p>

            {/* Action Buttons Deck */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#work"
                className="px-6 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-sm font-semibold hover:opacity-90 transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2"
              >
                <span>Explore Flagships</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onContextMenu={(e) => {
                  e.preventDefault();
                  openCvModal();
                }}
                className="px-5 py-3 rounded-full bg-white/80 dark:bg-[#0A0A0E]/80 backdrop-blur-md hairline-border text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all shadow-xs inline-flex items-center gap-1.5 cursor-pointer"
                title="Chuột trái: mở CV chính · Chuột phải: chọn các phiên bản CV"
              >
                <FileText className="w-3.5 h-3.5 opacity-70" />
                <span>Resume &amp; CV ↗</span>
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="px-4 py-3 rounded-full bg-white/80 dark:bg-[#0A0A0E]/80 backdrop-blur-md hairline-border text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer shadow-xs inline-flex items-center gap-2"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 opacity-60" />
                    <span>{personalInfo.email}</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Core Specialization Chips */}
            <div className="pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
                Technical Core
              </div>
              <div className="flex flex-wrap gap-1.5">
                {coreSpecializations.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/70 dark:bg-white/5 backdrop-blur-md hairline-border text-neutral-700 dark:text-neutral-300 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </InView>
      </div>
    </section>
  );
};

export default Hero;
