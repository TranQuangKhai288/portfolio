import { useState, useEffect } from "react";
import homeData from "../data/homeData.jsx";
import Tippy from "@tippyjs/react";
import Swal from "sweetalert2";
import ParticleBackground from "./ParticleBackground";

const Home = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const titles = homeData.typingTexts;
    const currentTitle = titles[currentIndex];

    const typeSpeed = isDeleting ? 60 : 100;
    const pauseTime = isDeleting ? 400 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentTitle.length) {
          setCurrentText(currentTitle.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen pt-20 overflow-hidden relative flex items-center"
      data-aos-duration="1000"
      data-aos="fade-down"
    >
      {/* Particle Background */}
      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white"
                data-aos-delay="200"
                data-aos="fade-down"
              >
                {homeData.title}
              </h1>
              <h2
                className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-800 dark:text-white flex items-center"
                data-aos-delay="400"
                data-aos="fade-right"
              >
                <span className="typing-text bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500">
                  {currentText}
                  <span
                    className={`cursor ${
                      showCursor ? "opacity-100" : "opacity-0"
                    } transition-all duration-200`}
                  >
                    |
                  </span>
                </span>
              </h2>
            </div>

            <p
              className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-lg"
              data-aos-delay="500"
              data-aos="fade-left"
            >
              {homeData.description}
            </p>

            <div
              className="flex items-center space-x-4"
              data-aos-delay="600"
              data-aos="fade-down"
            >
              <span className="text-slate-700 dark:text-slate-300 font-medium">
                Follow me on:
              </span>
              <div className="flex space-x-3">
                {homeData.socialMedia.map((social, index) => (
                  <Tippy content={social.platform} key={index} placement="top">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-100 text-slate-700 dark:bg-slate-900/60 dark:text-slate-300 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-800/80 hover:text-white hover:bg-blue-600 dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      aria-label={`Visit ${social.platform}`}
                    >
                      <i className={`${social.icon} text-lg`}></i>
                    </a>
                  </Tippy>
                ))}
              </div>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4"
              data-aos-delay="700"
              data-aos="fade-down"
            >
              {homeData.buttons.map((btn, index) => (
                <Tippy content={btn.label} key={index} placement="top">
                  {btn.href && btn.href !== "#" ? (
                    <a
                      href={btn.href}
                      className={`inline-flex items-center justify-center px-6 py-3 font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 ${
                        btn.type === "primary"
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                          : "border border-slate-300 dark:border-slate-800 bg-white/60 dark:bg-white/5 backdrop-blur-md text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/10"
                      }`}
                    >
                      <i
                        className={`bx ${
                          btn.type === "primary" ? "bx-folder-open" : "bx-file-blank"
                        } mr-2`}
                      />
                      {btn.label}
                    </a>
                  ) : (
                    <button
                      onClick={() =>
                        Swal.fire({
                          title: "Not Available Yet 😅",
                          text: "This feature or file is not ready yet. Please check back later!",
                          icon: "info",
                          confirmButtonColor: "#3b82f6",
                          confirmButtonText: "Alright",
                        })
                      }
                      className={`inline-flex items-center justify-center px-6 py-3 font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 ${
                        btn.type === "primary"
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                          : "border border-slate-300 dark:border-slate-800 bg-white/60 dark:bg-white/5 backdrop-blur-md text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/10"
                      }`}
                      aria-label={btn.label}
                    >
                      <i
                        className={`bx ${
                          btn.type === "primary" ? "bx-folder-open" : "bx-file-blank"
                        } mr-2`}
                      />
                      {btn.label}
                    </button>
                  )}
                </Tippy>
              ))}
            </div>

            {/* Quick Stats Heading */}
            <div data-aos-delay="800" data-aos="fade-up">
              <h4 className="flex items-center gap-2 text-sm font-semibold mb-3 text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <i className="bx bx-bar-chart-alt text-base" />
                Quick Stats:
              </h4>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {homeData.stats.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/60 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/60 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md p-3 rounded-2xl"
                  >
                    <div className="text-slate-700 dark:text-slate-300">
                      {item.isImage ? (
                        <div className="w-8 h-8 bg-white/80 dark:bg-slate-800 rounded-full flex items-center justify-center p-1 shadow-sm">
                          <img
                            src={item.icon}
                            alt={item.label}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-blue-50 dark:bg-indigo-950/40 rounded-full flex items-center justify-center">
                          <i className={`${item.icon} text-lg`}></i>
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 dark:text-white text-sm">
                        {item.value}
                      </p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="relative flex justify-center items-center"
            data-aos-delay="400"
            data-aos="fade-up"
          >
            {/* Glowing Backdrop behind Avatar */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-blue-500/20 dark:bg-indigo-500/10 blur-[60px] animate-pulse"></div>

            <div className="relative z-10">
              <img
                src={homeData.img}
                alt="Khai Tran Profile"
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-90 lg:h-90 object-cover rounded-full shadow-2xl dark:shadow-black/40 border-4 border-white/20 dark:border-slate-800/80 p-2 bg-white/10 dark:bg-slate-900/30 backdrop-blur-md hover:shadow-3xl hover:-translate-y-2 transition-all duration-500"
              />
            </div>

            {homeData.floatingIcons.map((tech, index) => {
              const positions = [
                "top-0 left-16 sm:left-20",
                "top-0 right-0",
                "bottom-0 left-8 sm:left-10",
                "bottom-8 sm:bottom-10 right-10 sm:right-12",
              ];
              return (
                <Tippy
                  key={index}
                  content={tech.label}
                  placement="top"
                  animation="shift-away"
                  delay={[0, 0]}
                >
                  <div
                    className={`absolute ${
                      positions[index % positions.length]
                    } w-12 h-12 sm:w-16 sm:h-16 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-full shadow-lg dark:shadow-black/30 flex items-center justify-center hover:scale-110 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-float cursor-pointer z-20`}
                    style={{
                      animationDelay: `${index * 0.5}s`,
                    }}
                  >
                    <i className={`${tech.icon} text-xl sm:text-2xl`} style={{ color: tech.color }}></i>
                  </div>
                </Tippy>
              );
            })}
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          .shadow-3xl {
            box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
          }
          .dark .shadow-3xl {
            box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.6);
          }
          .typing-text {
            display: inline-block;
          }
          .cursor {
            font-weight: 600;
            color: #2563eb;
          }
          .dark .cursor {
            color: #818cf8;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Home;
