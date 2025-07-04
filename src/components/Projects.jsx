import projectsData from '../data/projectsData.jsx';

const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen bg-white dark:bg-gray-800 pt-20 overflow-hidden"
            data-aos="fade-down"
            data-aos-duration="1000"
        >
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">My Personal Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectsData.map((project, idx) => (
                        <div key={project.name} className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col" data-aos="fade-up" data-aos-delay={idx * 100}>
                            <div className="flex items-center mb-4">
                                <i className={`${project.icon} text-3xl text-blue-500 mr-3`} aria-hidden="true"></i>
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{project.name}</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                            <div className="mt-auto flex gap-4">
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">Demo</a>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition">GitHub</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Projects;