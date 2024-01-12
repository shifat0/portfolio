import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import { Nav } from "./components/Nav/Nav";

export default function Home() {
  return (
    <main className="relative bg-[#2D3250] h-screen text-gray-300 overflow-x-hidden overflow-y-scroll">
      {/* snap-y snap-mandatory */}
      <Nav />
      {/* Hero */}
      <Hero />
      {/* About Me */}
      <About />
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
      {/* Footer */}
    </main>
  );
}
