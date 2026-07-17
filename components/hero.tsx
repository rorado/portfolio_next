"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, initGsap } from "@/lib/gsap";
import { use3DCapability } from "@/components/three/use-3d-capability";

const HeroScene = dynamic(() => import("@/components/three/hero-scene"), {
  ssr: false,
});

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { enabled, isMobile } = use3DCapability();

  useGSAP(
    () => {
      initGsap();

      const introTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      introTimeline
        .from(".hero-copy", {
          opacity: 0,
          y: 26,
          duration: 0.85,
          stagger: 0.14,
        })
        .from(
          ".hero-social",
          {
            opacity: 0,
            y: 18,
            duration: 0.6,
            stagger: 0.09,
          },
          "-=0.35",
        )
        .from(
          ".hero-visual",
          {
            opacity: 0,
            scale: 0.92,
            y: 12,
            duration: 0.9,
          },
          "<",
        );

      gsap.to(".hero-primary-cta", {
        y: -5,
        duration: 1.7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-scroll-icon", {
        y: 9,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: sectionRef },
  );

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
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* --- Left Content --- */}
        <div className="space-y-8">
          <div className="space-y-4 hero-copy">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-balance">
              Sohaib Ahrich
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              Full-Stack Developer
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Building modern web applications with React, Next.js, TypeScript,
              and Node.js—focused on performance, accessibility, and exceptional
              user experience.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 hero-copy">
            <div className="flex items-center gap-4 hero-primary-cta">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300  cursor-pointer"
              >
                View Selected Work
              </Button>
            </div>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-border text-foreground hover:bg-background hover:scale-95 transition-all duration-300 cursor-pointer"
            >
              Let’s Work Together
            </Button>
          </div>

          {/* --- Social Links --- */}
          <div className="flex items-center gap-6 hero-copy hero-social hover">
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
        <div className="relative flex justify-center hero-visual">
          <div className="relative aspect-square w-full max-w-lg rounded-3xl">
            {/* Accessible / no-JS / reduced-motion / unsupported-WebGL fallback.
                Cross-fades out once the 3D scene takes over. */}
            {/* <div
              className={`absolute inset-0 flex items-center justify-center rounded-3xl bg-linear-to-br from-primary/20 to-accent/20 shadow-lg transition-opacity duration-700 ${
                enabled ? "opacity-0" : "opacity-100"
              }`}
            >
              <Image
                src="/imagepo.webp"
                alt="Sohaib Ahrich"
                width={500}
                height={500}
                priority
                className="rounded-3xl"
              />
            </div> */}

            {enabled && (
              <Suspense fallback={null}>
                <HeroScene sectionRef={sectionRef} isMobile={isMobile} />
              </Suspense>
            )}
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
