import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import Header from './components/Header';
import VideoLoop from './components/VideoLoop';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = location.state.scrollTo;
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 500,
          smooth: true,
          offset: -70,
        });
      }, 300);
    }
  }, [location]);

  return (
    <>
      <Header />
      <VideoLoop />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

