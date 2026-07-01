import skillsData from '../data/skillsData.jsx';

const BRAND_COLORS = {
  // Frontend
  "HTML": "#e34c26",
  "CSS": "#264de4",
  "JavaScript": "#f7df1e",
  "TypeScript": "#3178c6",
  "React JS": "#61dafb",
  "Next JS": "#000000",
  "React Native": "#61dafb",
  "Material UI": "#0081cb",
  "Refine": "#3072ff",
  "BootStrap": "#7952b3",
  "AntD": "#1890ff",
  "Redux & Redux Toolkit": "#764abc",
  // Backend
  "Node.js": "#339933",
  "Express.js": "#475569",
  "REST API": "#0284c7",
  // Database
  "SQL": "#00758f",
  "MySQL": "#00758f",
  "MongoDB": "#47a248",
  "Firebase": "#ffca28",
  "PostgreSQL": "#4169e1",
  // Other
  "Clean code & Debugging": "#10b981",
  "Unit Testing (Jest, React Testing Library…)": "#ea580c",
  "CI/CD Basics": "#3b82f6",
  "Git": "#f05032",
  "Figma": "#f24e1e",
  // Soft Skills
  "Problem Solving": "#eab308",
  "Self-Learning": "#10b981",
  "Teamwork": "#3b82f6",
  "Communication": "#ec4899"
};

const Skills = () => {
    // Helper to divide array into chunks of 2 items
    function chunkArray(array, size) {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    }

    return (
        <section
            id="skills"
            className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-transparent"
        >
            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <h2 className="text-4xl font-bold text-center mb-2 text-slate-800 dark:text-white" data-aos="fade-down">
                    My Skills
                </h2>
                <p className="text-center text-slate-500 dark:text-slate-400 mb-12 text-sm max-w-md mx-auto" data-aos="fade-down" data-aos-delay="100">
                    A representation of my tech stack, frameworks, tools and core competencies
                </p>

                {skillsData.map((section, sectionIdx) => (
                    <div key={section.section} className="mb-14">
                        <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-indigo-400 uppercase tracking-widest flex items-center gap-2" data-aos="fade-right">
                            <span className="w-1.5 h-6 bg-blue-600 dark:bg-indigo-500 rounded-full"></span>
                            {section.section}
                        </h3>

                        {section.section === 'SOFT SKILLS' ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {chunkArray(section.groups[0].skills, 2).map((row, rowIdx) => (
                                    row.map((skill, colIdx) => {
                                        const color = BRAND_COLORS[skill.name] || '#3b82f6';
                                        return (
                                            <div
                                                key={skill.name}
                                                className="flex flex-row items-center gap-4 px-5 py-4 rounded-2xl bg-white/50 dark:bg-slate-900/30 backdrop-blur-md text-slate-800 dark:text-slate-200 border border-slate-200/50 dark:border-slate-800/60 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md cursor-pointer"
                                                style={{ borderLeftWidth: '4px', borderLeftColor: color }}
                                                data-aos-delay={rowIdx * 100}
                                                data-aos="fade-up"
                                            >
                                                <div 
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                                    style={{ backgroundColor: `${color}15`, color: color }}
                                                >
                                                    <i className={`${skill.icon} text-2xl`} aria-hidden="true"></i>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-base text-slate-800 dark:text-slate-100">{skill.name}</span>
                                                    <span className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-0.5">{skill.description}</span>
                                                </div>
                                            </div>
                                        );
                                    })
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {section.groups.map((group, idx) => (
                                    <div 
                                        key={group.category} 
                                        className="bg-white/40 dark:bg-slate-900/20 backdrop-blur-md rounded-2xl shadow-md border border-slate-200/50 dark:border-slate-800/60 p-6 transition-all duration-300 hover:shadow-lg" 
                                        data-aos="fade-up" 
                                        data-aos-delay={idx * 100}
                                    >
                                        <h4 className="text-lg font-bold mb-4 text-slate-700 dark:text-slate-200 border-b border-slate-200/50 dark:border-slate-800/50 pb-2">{group.category}</h4>
                                        <div className="flex flex-wrap gap-2.5">
                                            {group.skills.map((skill, i) => {
                                                const color = BRAND_COLORS[skill.name] || '#3b82f6';
                                                return (
                                                    <span
                                                        key={skill.name}
                                                        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/60 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800/80 font-medium text-xs shadow-sm transition-all duration-300 hover:scale-105 cursor-pointer"
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.borderColor = color;
                                                            e.currentTarget.style.boxShadow = `0 0 12px ${color}35`;
                                                            e.currentTarget.style.color = '#fff';
                                                            e.currentTarget.style.backgroundColor = `${color}e0`;
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.borderColor = '';
                                                            e.currentTarget.style.boxShadow = '';
                                                            e.currentTarget.style.color = '';
                                                            e.currentTarget.style.backgroundColor = '';
                                                        }}
                                                    >
                                                        <i className={`${skill.icon} text-base`} aria-hidden="true"></i>
                                                        {skill.name}
                                                        {skill.level && (
                                                            <span className="ml-1 px-1.5 py-0.5 text-[9px] bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-md font-mono">{skill.level}</span>
                                                        )}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;