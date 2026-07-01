import experienceData from "../data/experienceData.jsx";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-transparent"
      data-aos-duration="1000"
      data-aos="fade-down"
    >
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-2 text-slate-800 dark:text-white">
          Professional Experience
        </h2>
        <p className="text-center text-slate-500 dark:text-slate-400 mb-12 text-sm max-w-md mx-auto">
          My professional milestones, engineering roles, and commercial contributions
        </p>

        <div className="grid grid-cols-1 gap-8">
          {experienceData.map((exp, idx) => (
            <div
              key={exp.position + exp.company}
              className="bg-white/40 dark:bg-slate-900/30 backdrop-blur-md rounded-2xl shadow-md border border-slate-200/50 dark:border-slate-800/60 p-6 flex flex-col gap-4 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700/80 transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="flex flex-col md:flex-row items-start md:items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 dark:bg-indigo-950/40 text-blue-600 dark:text-indigo-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner">
                  <i className={`${exp.icon} text-2xl`} aria-hidden="true"></i>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                      {exp.position}
                    </h3>
                    <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-mono bg-blue-50 dark:bg-indigo-950/60 border border-blue-100 dark:border-indigo-900/80 px-2 py-0.5 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-0.5">
                    {exp.company}
                  </p>
                  <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Badges/Tags for Skills Used */}
                  {exp.tags && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-2.5 py-0.5 text-[10px] font-semibold bg-blue-50 dark:bg-indigo-950/40 text-blue-700 dark:text-indigo-300 border border-blue-100/60 dark:border-indigo-900/40 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {exp.highlights && (
                <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-4 mt-2">
                  <ul className="space-y-2 ml-1 list-none">
                    {exp.highlights.map((highlight, hIdx) => {
                      const parts = highlight.split(':');
                      if (parts.length > 1) {
                        return (
                          <li
                            key={hIdx}
                            className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex items-start gap-2"
                          >
                            <span className="text-indigo-500 dark:text-indigo-400 mt-1 font-mono text-[11px]">✦</span>
                            <span>
                              <strong className="text-slate-800 dark:text-slate-100 font-bold">{parts[0]}:</strong>
                              {parts.slice(1).join(':')}
                            </span>
                          </li>
                        );
                      }
                      return (
                        <li
                          key={hIdx}
                          className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-indigo-500 dark:text-indigo-400 mt-1 font-mono text-[11px]">✦</span>
                          <span>{highlight}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
