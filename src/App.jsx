import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import AmbientBackdrop from "./components/AmbientBackdrop.jsx";

export default function App() {
  return (
    <main className="site-shell">
      <AmbientBackdrop />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
