import projectsData from "../data/projectsData.jsx";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-white dark:bg-gray-800 pt-20 overflow-hidden"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
          My Personal Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <div
              key={project.name}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-2"
              //   data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {" "}
              {/* Project Image/Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i
                    className={`${project.icon} text-6xl text-white opacity-80`}
                    aria-hidden="true"
                  ></i>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white bg-opacity-20 rounded-full"></div>
                <div className="absolute bottom-8 right-8 w-8 h-8 bg-white bg-opacity-30 rounded-full"></div>
                <div className="absolute top-8 left-8 w-12 h-12 bg-white bg-opacity-25 rounded-full"></div>
                {/* Overlay with project name */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.name}
                  </h3>
                </div>
              </div>
              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    <i className="bx bx-link-external mr-2"></i>
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 text-center shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    <i className="bx bxl-github mr-2"></i>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
