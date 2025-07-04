import skillsData from '../data/skillsData.jsx';

const Skills = () => {
    // Helper để chia mảng thành các cặp (2 phần tử mỗi hàng)
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
        className="min-h-screen bg-white dark:bg-gray-800 pt-20 overflow-hidden"
        >
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white" data-aos="fade-down">My Skills</h2>
                {skillsData.map((section, sectionIdx) => (
                    <div key={section.section} className="mb-12">
                        <h3 className="text-2xl font-bold mb-6 text-blue-600 uppercase tracking-wider" data-aos="fade-right">{section.section}</h3>
                        {section.section === 'SOFT SKILLS' ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {chunkArray(section.groups[0].skills, 2).map((row, rowIdx) => (
                                    row.map((skill, colIdx) => (
                                        <div
                                        key={skill.name}
                                        className="flex flex-row items-center gap-4 px-4 py-3 mb-2 rounded-2xl bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium text-base shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
                                        data-aos="fade-up"
                                        data-aos-delay={rowIdx * 100}
                                        >
                                        <i className={`${skill.icon} text-3xl flex-shrink-0`} aria-hidden="true"></i>
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-base">{skill.name}</span>
                                            <span className="text-xs text-gray-600 dark:text-gray-300 leading-snug">{skill.description}</span>
                                        </div>
                                        </div>
                                    ))
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {section.groups.map((group, idx) => (
                                    <div key={group.category} className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg p-6" data-aos="fade-up" data-aos-delay={idx * 100}>
                                        <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{group.category}</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {group.skills.map((skill, i) => (
                                                <span
                                                key={skill.name}
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium text-sm shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
                                                >
                                                <i className={`${skill.icon} text-lg`} aria-hidden="true"></i>
                                                {skill.name}
                                                {skill.level && (
                                                    <span className="ml-2 text-xs text-gray-500 dark:text-gray-300">{skill.level}</span>
                                                )}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Skills;