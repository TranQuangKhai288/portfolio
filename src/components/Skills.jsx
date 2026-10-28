import { skillsMatrix } from "../data/portfolioData";
import { InView } from "./ui/in-view";
import {
  ShieldCheck,
  Code2,
  Layers,
  Server,
  Database,
  Bot,
} from "lucide-react";

const Skills = () => {
  const categoryIcons = {
    FRONTEND: Layers,
    "UI / STYLING": Code2,
    "STATE / FORM & TESTING": ShieldCheck,
    "BACKEND (WORKING KNOWLEDGE)": Server,
    "DATABASE & DEVOPS": Database,
    "AI INTEGRATION & WORKFLOW": Bot,
  };

  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <InView>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                Core Competencies
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-neutral-900 dark:text-white">
                Technical Capabilities
              </h2>
            </div>
            <p className="text-base text-neutral-500 dark:text-[#86868B] max-w-md leading-relaxed">
              Curated capabilities verified in production across web applications, distributed edge services, and autonomous agent systems.
            </p>
          </div>

          {/* 6-Cluster Inventory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsMatrix.map((cluster, idx) => {
              const IconComponent = categoryIcons[cluster.category] || Code2;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0A0A0E] hairline-border space-y-5 shadow-xs hover:border-black/20 dark:hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Category Header */}
                    <div className="flex items-center justify-between pb-3 hairline-b">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-100 dark:bg-white/5 text-blue-500">
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">
                          {cluster.category}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-neutral-400">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Skill List */}
                    <div className="flex flex-wrap gap-1.5">
                      {cluster.skills.map((skill, sIdx) => {
                        const skillName = typeof skill === "object" ? skill.name : skill;
                        return (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 text-xs font-mono rounded-lg bg-neutral-100 dark:bg-white/5 hairline-border text-neutral-700 dark:text-neutral-300"
                          >
                            {skillName}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 pt-3 hairline-t">
                    Production Verified · Senior Level
                  </div>
                </div>
              );
            })}
          </div>
        </InView>
      </div>
    </section>
  );
};

export default Skills;
