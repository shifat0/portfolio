import Hero from "./components/Hero/Hero";
import { Nav } from "./components/Nav/Nav";

export default function Home() {
  return (
    <main className="relative bg-[#2D3250] h-screen text-gray-300 snap-y snap-mandatory overflow-x-hidden overflow-y-scroll">
      <Nav />
      {/* Hero */}
      <Hero />
      {/* About Me */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
      {/* Footer */}
    </main>
  );
}
