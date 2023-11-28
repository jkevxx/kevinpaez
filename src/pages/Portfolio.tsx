import Navbar from '../components/navbar/Navbar';
import About from './about-section/About';
import Contact from './contact-section/Contact';
import Footer from './footer-section/Footer';
import Home from './home-section/Home';
import Projects from './projects-section/Projects';
import Skills from './skills-section/Skills';

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Portfolio;
