import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import CraftLab from "./components/CraftLab";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { GalleryProvider } from "./contexts/GalleryContext";
import { ThemeAccentProvider } from "./contexts/ThemeAccentContext";
import { CvProvider } from "./contexts/CvContext";

function App() {
  return (
    <ThemeAccentProvider>
      <GalleryProvider>
        <CvProvider>
          <div className="min-h-screen bg-[#FAFAFA] text-[#1D1D1F] dark:bg-[#000000] dark:text-[#F5F5F7] transition-colors duration-300 antialiased relative">
            {/* Subtle Optical Tech Grid */}
            <div className="fixed inset-0 bg-tech-grid opacity-50 dark:opacity-35 pointer-events-none -z-20" />

            <Navbar />

            <main id="main-content" className="relative z-10">
              <Hero />
              <Projects />
              <CraftLab />
              <Experience />
              <Skills />
              <About />
              <Contact />
            </main>

            <Footer />
            <ScrollToTop />
          </div>
        </CvProvider>
      </GalleryProvider>
    </ThemeAccentProvider>
  );
}

export default App;
