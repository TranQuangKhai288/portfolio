import { experienceData } from "../data/portfolioData";
import { InView } from "./ui/in-view";
import {
  Briefcase,
  Calendar,
  MapPin,
  Building2,
  CheckCircle2,
} from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <InView>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                Career Timeline
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-neutral-900 dark:text-white">
                Engineering Experience
              </h2>
            </div>
            <p className="text-base text-neutral-500 dark:text-[#86868B] max-w-md leading-relaxed">
              Production software engineering across B2B travel platforms, real-time sports apps, and venture studio systems.
            </p>
          </div>

          {/* Timeline Stream */}
          <div className="space-y-8">
            {experienceData.map((exp, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0A0A0E] hairline-border space-y-6 shadow-sm hover:border-black/20 dark:hover:border-white/20 transition-colors"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 hairline-b">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                        {exp.company}
                      </h3>
                      <span className="text-neutral-300 dark:text-neutral-700">·</span>
                      <span className="text-xs font-mono text-neutral-500">
                        {exp.subheadline}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-blue-500" />
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {exp.position}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-500">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/5 hairline-border text-neutral-800 dark:text-neutral-200 tabular-nums font-medium">
                      <Calendar className="w-3 h-3 text-emerald-500" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-white/5 hairline-border text-neutral-500">
                      <MapPin className="w-3 h-3 text-neutral-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Narrative Summary */}
                <p className="text-base text-neutral-600 dark:text-[#86868B] leading-relaxed max-w-4xl">
                  {exp.summary}
                </p>

                {/* Verified Achievements */}
                <div className="space-y-3">
                  {exp.achievements.map((ach, aIdx) => (
                    <div
                      key={aIdx}
                      className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300"
                    >
                      <CheckCircle2 className="w-4 h-4 mt-1 shrink-0 text-emerald-500" />
                      <span className="leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 hairline-t">
                  {(exp.tags || exp.technologies || []).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-neutral-100 dark:bg-white/5 hairline-border text-neutral-600 dark:text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </InView>
      </div>
    </section>
  );
};

export default Experience;
