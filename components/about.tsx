"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, initGsap } from "@/lib/gsap";
import { parallaxAnimation } from "@/lib/animations";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      initGsap();

      // Slide in animations from sides
      gsap.from(".about-left", {
        x: -100,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      gsap.from(".about-right", {
        x: 100,
        opacity: 0,
        duration: 1.1,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      // Parallax effect for background
      if (sectionRef.current) {
        parallaxAnimation(".about-bg-decor", -50, sectionRef.current);
      }

      // Text line reveal
      gsap.from(".about-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-[100px] about-bg-decor pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 about-left">
            <div className="space-y-3">
              <h2 className="text-sm uppercase tracking-widest font-semibold">
                About Me
              </h2>
              <div className="w-12 h-0.5 bg-primary about-line"></div>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Building products that feel effortless and look unforgettable
            </h3>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed about-right">
            <p>
              I&apos;m a full‑stack developer who loves clean interfaces,
              reliable architecture, and performance that scales. My focus is
              crafting digital experiences that are intuitive, fast, and
              accessible.
            </p>
            <p>
              I work across the stack with React, Next.js, and TypeScript,
              bridging product design and engineering to deliver polished
              solutions from concept to launch.
            </p>
            <p>
              When I&apos;m not coding, I explore new frameworks, study design
              systems, and contribute to open‑source tools that help teams ship
              faster.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/2" />
      </div>
    </section>
  );
}
