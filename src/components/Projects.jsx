import { useState } from "react";
import projectsData from "../data/projectsData.jsx";
import { useGallery } from "../contexts/GalleryContext";

const Projects = () => {
  const { openGallery } = useGallery();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web Apps", "Mobile Apps", "AI Integrations"];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-transparent"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-2 text-slate-800 dark:text-white">
          My Projects
        </h2>
        <p className="text-center text-slate-500 dark:text-slate-400 mb-8 text-sm max-w-md mx-auto">
          A showcase of my recent web applications, mobile apps, and AI-driven solutions
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/10 scale-105"
                  : "bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.name}
              className="bg-white/40 dark:bg-slate-900/20 backdrop-blur-md rounded-2xl shadow-md border border-slate-200/50 dark:border-slate-800/60 overflow-hidden hover:shadow-2xl hover:border-blue-500/30 dark:hover:border-indigo-500/30 hover:shadow-blue-500/5 dark:hover:shadow-indigo-500/5 transition-all duration-500 ease-in-out transform hover:-translate-y-2 flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Project Image */}
              <div className="relative h-52 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                {!project.image && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <i
                      className={`${project.icon} text-6xl text-white opacity-80`}
                      aria-hidden="true"
                    ></i>
                  </div>
                )}
                {/* Visual Accent Orbs */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-md"></div>
                <div className="absolute bottom-8 right-8 w-8 h-8 bg-white/20 rounded-full blur-sm"></div>
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/50 backdrop-blur-md text-white rounded-md border border-white/10">
                  {project.category}
                </span>

                {/* Gradient Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/80 to-transparent p-5">
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {project.name}
                  </h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-slate-600 dark:text-slate-350 mb-5 leading-relaxed text-sm flex-1">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 text-[10px] font-bold bg-blue-50 dark:bg-indigo-950/40 text-blue-700 dark:text-indigo-300 border border-blue-100/60 dark:border-indigo-900/40 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2.5 mt-auto">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 text-center flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer"
                    >
                      <i className="bx bx-link-external text-base"></i>
                      Live Demo
                    </a>
                  )}

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        openGallery(project.demoImages || [project.image])
                      }
                      className="flex-1 px-4 py-2.5 bg-slate-100 dark:bg-slate-900/50 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-xl font-semibold shadow-sm transition-all duration-300 text-center flex items-center justify-center gap-1.5 hover:-translate-y-0.5 cursor-pointer"
                    >
                      <i className="bx bx-image text-base"></i>
                      Screenshots
                    </button>

                    {project.githubBe ? (
                      <div className="flex flex-1 gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-2.5 py-2 border border-slate-300 dark:border-slate-800 bg-white/50 dark:bg-white/5 text-slate-800 dark:text-slate-200 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-300 text-center text-[10px] flex items-center justify-center gap-1 hover:-translate-y-0.5 cursor-pointer"
                        >
                          <i className="bx bxl-github text-sm"></i>
                          App
                        </a>
                        <a
                          href={project.githubBe}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-2.5 py-2 border border-slate-300 dark:border-slate-800 bg-white/50 dark:bg-white/5 text-slate-800 dark:text-slate-200 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-300 text-center text-[10px] flex items-center justify-center gap-1 hover:-translate-y-0.5 cursor-pointer"
                        >
                          <i className="bx bxl-github text-sm"></i>
                          Backend
                        </a>
                      </div>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2.5 border border-slate-300 dark:border-slate-800 bg-white/50 dark:bg-white/5 text-slate-800 dark:text-slate-200 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-300 text-center flex items-center justify-center gap-1.5 hover:-translate-y-0.5 cursor-pointer"
                      >
                        <i className="bx bxl-github text-base"></i>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More on GitHub */}
        <div className="mt-12 flex justify-center" data-aos="fade-up">
          <a
            href="https://github.com/TranQuangKhai288"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-slate-200 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 backdrop-blur-md text-slate-700 dark:text-slate-300 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-slate-750 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
          >
            <i className="bx bxl-github text-lg"></i>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
