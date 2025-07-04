import Navbar from './components/Navbar';
import Home from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
// import Testimonials from './components/Testimonial';
function App() {

  return (
    <div className='bg-white dark:bg-gray-800'>
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
  )
}

export default App
