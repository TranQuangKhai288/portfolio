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
// import Testimonials from './components/Testimonial';
function App() {
  return (
    <GalleryProvider>
      <div className="bg-white dark:bg-gray-800">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </GalleryProvider>
  );
}

export default App;
