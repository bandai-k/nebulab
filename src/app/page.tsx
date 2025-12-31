import Background from "@/components/ui/Background";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-[#fff8e7] text-[#3d2f24]">
      <Background />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
