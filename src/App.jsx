import Navbar from "./components/Navbar";
import Home from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import { GalleryProvider } from "./contexts/GalleryContext";

function App() {
  return (
    <GalleryProvider>
      <div className="bg-[#f8fafc] dark:bg-[#030712] text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300 relative overflow-hidden">
        {/* Background Decorative Glowing Orbs */}
        <div className="absolute top-[5%] left-[5%] w-[25rem] h-[25rem] sm:w-[35rem] sm:h-[35rem] rounded-full bg-blue-500/5 dark:bg-blue-600/10 blur-[80px] sm:blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute top-[35%] right-[5%] w-[30rem] h-[30rem] sm:w-[40rem] sm:h-[40rem] rounded-full bg-purple-500/5 dark:bg-purple-600/10 blur-[90px] sm:blur-[130px] pointer-events-none z-0"></div>
        <div className="absolute top-[65%] left-[10%] w-[25rem] h-[25rem] sm:w-[35rem] sm:h-[35rem] rounded-full bg-emerald-500/3 dark:bg-emerald-600/5 blur-[80px] sm:blur-[110px] pointer-events-none z-0"></div>
        <div className="absolute top-[85%] right-[10%] w-[30rem] h-[30rem] sm:w-[35rem] sm:h-[35rem] rounded-full bg-indigo-500/5 dark:bg-indigo-600/8 blur-[90px] sm:blur-[120px] pointer-events-none z-0"></div>

        <div className="relative z-10">
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </GalleryProvider>
  );
}

export default App;
