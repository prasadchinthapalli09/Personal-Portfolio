import { useTheme } from "./hooks/useTheme.js";
import { sections } from "./data/sections.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Highlights from "./components/Highlights.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Resume from "./components/Resume.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        {sections.highlights && <Highlights />}
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
