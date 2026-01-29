"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export function Hero() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex items-center justify-center px-6 py-20 md:py-32 lg:py-40">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* --- Left Content --- */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-balance">
              Sohaib Ahrich
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              Full-Stack Developer
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I build modern, fast, and beautiful web experiences focusing on
              clean code, performance, and design that feels alive.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-border text-foreground hover:bg-secondary transition-all duration-300 cursor-pointer"
            >
              Contact Me
            </Button>
          </div>

          {/* --- Social Links --- */}
          <div className="flex items-center gap-6">
            <SocialIcon href="https://github.com/rorado" label="GitHub">
              <Github className="w-6 h-6" />
            </SocialIcon>
            <SocialIcon
              href="https://www.linkedin.com/in/sohaib-ahrich"
              label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </SocialIcon>
            <SocialIcon href="mailto:sohaybahrich3@gmail.com" label="Email">
              <Mail className="w-6 h-6" />
            </SocialIcon>
          </div>
        </div>

        {/* --- Right Visual --- */}
        <div className="relative flex justify-center">
          <div className="w-full max-w-sm h-96 bg-linear-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center shadow-lg">
            <Image
              src="/imagepo.webp"
              alt="SA"
              width={500}
              height={500}
              className="rounded-25xl"
            />
          </div>
        </div>
      </div>

      {/* --- Scroll Down Button --- */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-(--color-text) transition-colors animate-bounce cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="hover:scale-110 transition-colors duration-300 text-(--color-primary)"
    >
      {children}
    </a>
  );
}
