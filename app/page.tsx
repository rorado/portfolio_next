import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";

export default async function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact /> */}
    </main>
  );
}
