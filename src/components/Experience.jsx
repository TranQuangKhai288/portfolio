import experienceData from "../data/experienceData.jsx";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-white dark:bg-gray-800 pt-20 overflow-hidden"
      data-aos-duration="1000"
      data-aos="fade-down"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
          Experience
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {experienceData.map((exp, idx) => (
            <div
              key={exp.position + exp.company}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col gap-4"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="flex flex-col md:flex-row items-start md:items-start gap-4">
                <i
                  className={`${exp.icon} text-3xl text-blue-500 flex-shrink-0`}
                  aria-hidden="true"
                ></i>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {exp.position}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs font-mono">
                    {exp.period}
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm italic">
                    {exp.description}
                  </p>
                </div>
              </div>
              {exp.highlights && (
                <ul className="list-disc list-inside space-y-1 ml-4">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="text-gray-700 dark:text-gray-300 text-sm"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
