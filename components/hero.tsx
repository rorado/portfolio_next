"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, initGsap } from "@/lib/gsap";
import {
  floatingAnimation,
  setupMagneticButton,
  glowPulseAnimation,
} from "@/lib/animations";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      initGsap();

      // Premium timeline with multiple layers
      const introTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Staggered text reveal with blur effect
      introTimeline
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 50,
            filter: "blur(10px)",
            duration: 0.95,
            ease: "power3.out",
          },
          0,
        )
        .from(
          ".hero-subtitle",
          {
            opacity: 0,
            y: 30,
            filter: "blur(8px)",
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 25,
            filter: "blur(6px)",
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".hero-copy",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".hero-social",
          {
            opacity: 0,
            y: 15,
            scale: 0.8,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out",
          },
          "-=0.35",
        )
        .from(
          ".hero-visual",
          {
            opacity: 0,
            scale: 0.85,
            filter: "blur(15px)",
            y: 40,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.6",
        );

      // Enhanced floating animations
      floatingAnimation(".hero-primary-cta", 8, 3.5);
      floatingAnimation(".hero-scroll-icon", 12, 2.8);

      // Glow effect on buttons
      glowPulseAnimation(".hero-primary-cta");

      // Parallax background elements
      gsap.to(".hero-bg-glow-1", {
        y: 30,
        opacity: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 0.5,
        },
      });

      gsap.to(".hero-bg-glow-2", {
        y: -40,
        opacity: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 0.7,
        },
      });

      // Subtle rotation for visual interest
      gsap.to(".hero-visual", {
        rotation: 2,
        y: 20,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "center center",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef },
  );

  // Setup magnetic button effect
  useEffect(() => {
    if (sectionRef.current) {
      setupMagneticButton(".hero-primary-cta");
    }
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center px-6 py-20 md:py-32 lg:py-40"
      id="hero"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/15 blur-[120px] rounded-full translate-x-1/3 hero-bg-glow-1" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/10 blur-[100px] rounded-full -translate-x-1/3 hero-bg-glow-2" />
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* --- Left Content --- */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-balance">
              Sohaib Ahrich
            </h1>
            <h2 className="hero-subtitle text-xl md:text-2xl text-muted-foreground font-medium">
              Full-Stack Developer
            </h2>
            <p className="hero-description text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I craft fast, accessible, and beautiful web experiences. From
              design systems to scalable backends, I build products that feel
              polished, responsive, and delightful.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-4 hero-primary-cta">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 cursor-pointer relative overflow-hidden group"
              >
                <span className="relative z-10">View Selected Work</span>
                <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </Button>
            </div>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-border text-foreground hover:bg-background hover:scale-95 transition-all duration-300 cursor-pointer"
            >
              Let&apos;s Work Together
            </Button>
          </div>

          {/* --- Social Links --- */}
          <div className="flex items-center gap-6">
            <SocialIcon href="https://github.com/rorado" label="GitHub">
              <Github className="w-6 h-6 hover:scale-130 transition-all duration-300" />
            </SocialIcon>
            <SocialIcon
              href="https://www.linkedin.com/in/sohaib-ahrich"
              label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 hover:scale-130 transition-all duration-300" />
            </SocialIcon>
            <SocialIcon href="mailto:sohaybahrich3@gmail.com" label="Email">
              <Mail className="w-6 h-6 hover:scale-130 transition-all duration-300" />
            </SocialIcon>
          </div>
        </div>

        {/* --- Right Visual --- */}
        <div className="relative flex justify-center hero-visual">
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-(--color-text) transition-colors cursor-pointer hero-scroll-icon"
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
      className="hover:scale-110 transition-colors duration-300 text-(--color-primary) hero-social"
    >
      {children}
    </a>
  );
}
