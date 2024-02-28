import About from "./components/About/About";
import ContactMe from "./components/ContactMe/ContactMe";
import Hero from "./components/Hero/Hero";
import { Nav } from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <main className="relative bg-[#2D3250] h-screen text-gray-300 overflow-x-hidden overflow-y-scroll">
      {/* snap-y snap-mandatory */}
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* Contact Me */}
      <ContactMe />
      {/* Footer */}
    </main>
  );
}
