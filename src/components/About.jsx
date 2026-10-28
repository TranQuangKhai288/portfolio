import { InView } from "./ui/in-view";
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  Zap,
} from "lucide-react";

const tenets = [
  {
    icon: Zap,
    title: "Performance by Default",
    desc: "Every network request, re-render, and compute task must justify its existence. 60fps main-thread responsiveness is non-negotiable.",
  },
  {
    icon: ShieldCheck,
    title: "Type Safety & Contracts",
    desc: "Strict TypeScript and Zod schemas bridge frontend state with C#/.NET and Node.js DTOs, eliminating runtime surprises at boundary lines.",
  },
  {
    icon: Sparkles,
    title: "Design Engineer Craft",
    desc: "Software should feel tactile and deliberate. Thoughtful micro-interactions, spring physics, and hairline contrast define elite products.",
  },
  {
    icon: HeartHandshake,
    title: "Pragmatic Agentic Velocity",
    desc: "Leveraging MCP skills and autonomous AI tooling to accelerate team delivery from 2–3 to 5–9 tickets/week without compromising architectural rigor.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <InView>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                Philosophy &amp; Credentials
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-neutral-900 dark:text-white">
                Engineering Approach
              </h2>
            </div>
            <p className="text-base text-neutral-500 dark:text-[#86868B] max-w-md leading-relaxed">
              At the intersection of design intuition, distributed edge architectures, and autonomous developer workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0A0A0E] hairline-border space-y-6 shadow-sm">
                <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                  Fullstack Depth with Frontend Precision
                </h3>

                <div className="space-y-4 text-base text-neutral-600 dark:text-[#86868B] leading-relaxed font-normal">
                  <p>
                    I am a Software Engineer based in Ho Chi Minh City, completing my B.Sc. in Software Engineering at the{" "}
                    <strong className="font-semibold text-neutral-900 dark:text-white">
                      University of Information Technology (VNU-HCM)
                    </strong>
                    . Over the past ~2 years, my engineering practice has centered on building production applications that bridge high-fidelity frontend UX with reliable backend services.
                  </p>
                  <p>
                    At{" "}
                    <strong className="font-semibold text-neutral-900 dark:text-white">
                      Tripdata Vietnam
                    </strong>
                    , I architect high-traffic travel booking systems — designing dynamic flight and hotel search engines, managing complex passenger state validation flows, and integrating C#/.NET RESTful endpoints. I believe performance is a core product feature, proven by cutting redundant API calls by ~30% through strict query caching and request cancellation.
                  </p>
                  <p>
                    Beyond traditional web apps, I actively research and implement autonomous developer workflows. By authoring custom Model Context Protocol (MCP) servers and reusable agent skills, I help teams scale feature velocity without compromising architectural rigor or code quality.
                  </p>
                </div>

                {/* 4 Tenets Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 hairline-t">
                  {tenets.map((tenet, idx) => {
                    const Icon = tenet.icon;
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-neutral-50 dark:bg-black/40 hairline-border space-y-2"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-emerald-500" />
                          <span className="font-mono text-xs font-semibold text-neutral-900 dark:text-white">
                            {tenet.title}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {tenet.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Academic & Impact Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* University Credential Card */}
              <div className="p-8 rounded-3xl bg-white dark:bg-[#0A0A0E] hairline-border space-y-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      Academic Background
                    </span>
                    <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                      B.Sc. Software Engineering
                    </h4>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-black/40 hairline-border space-y-2">
                  <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                    University of Information Technology (UIT)
                  </div>
                  <div className="text-xs text-neutral-500">
                    Vietnam National University, Ho Chi Minh City (VNU-HCM)
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono pt-1 text-neutral-400">
                    <span>2021 — 2026</span>
                    <span className="text-emerald-500 font-semibold">Senior Candidate</span>
                  </div>
                </div>

                <p className="text-xs text-neutral-500 dark:text-[#86868B] leading-relaxed">
                  Rigorous foundational curriculum in distributed systems, algorithms, database normalization, and object-oriented software architecture.
                </p>
              </div>

              {/* Work Availability & Location Card */}
              <div className="p-8 rounded-3xl bg-white dark:bg-[#0A0A0E] hairline-border space-y-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      Current Availability
                    </span>
                    <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                      Senior / Lead Frontend Roles
                    </h4>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-neutral-600 dark:text-neutral-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Target Roles: Frontend Engineer / Fullstack Developer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Location: Ho Chi Minh City, Vietnam (On-site / Hybrid / Remote)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Timezone: UTC+7 (Flexible crossover with US/EU/APAC)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </InView>
      </div>
    </section>
  );
};

export default About;
