import Background from "@/components/ui/Background";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-neutral-950 text-neutral-50">
      <Background />
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
