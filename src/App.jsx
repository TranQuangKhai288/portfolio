import Navbar from './components/Navbar';
import Home from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Contact from './components/Contact';
// import Testimonials from './components/Testimonial';
function App() {

  return (
    <div className='bg-white dark:bg-gray-800'>
      <Navbar />
      <Home />
      <About />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
