"use client";

import { ExternalLink } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, initGsap } from "@/lib/gsap";
import { setupHoverLiftAnimation } from "@/lib/animations";

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      initGsap();

      // Enhanced stagger animations
      gsap.from(".experience-item-left", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "restart none restart none",
        },
      });

      gsap.from(".experience-item-right", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "restart none restart none",
        },
      });

      // Hover lift effect for experience items
      setupHoverLiftAnimation(".experience-item-left, .experience-item-right");

      // Rotate accent line on scroll
      gsap.to(".experience-accent-line", {
        scaleX: 1,
        transformOrigin: "left center",
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef },
  );

  const experiences = [
    {
      period: "2024 — 2025",
      title: "Full-Stack Developer",
      company: "Vierra Digital LLC",
      live: "https://vierradev.com/",
      description:
        "Lead development of client-facing platforms from discovery to launch. Ship scalable features, optimize performance, and collaborate with designers to turn high‑fidelity UI into resilient, accessible interfaces.",
      technologies: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Prisma",
      ],
    },
    {
      period: "2022 — 2023",
      title: "Frontend Engineer",
      company: "Freelance / Contract",
      description:
        "Delivered modern marketing sites and web apps for startups, focused on conversions, motion, and SEO. Built reusable components, set up analytics, and improved lighthouse scores through code splitting and asset optimization.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Vercel",
        "Figma",
      ],
    },
    {
      period: "2021 — present",
      title: "Full Stack Developer",
      company: "upwork / Freelance",
      // live: "https://github.com/rorado",
      description:
        "Built REST APIs and dynamic web apps for clients across e_commerce, SaaS, and content platforms. Implemented features end to end, from database schema design to frontend integration, ensuring performant and maintainable code.",
      technologies: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "Prisma",
        "REST APIs",
        "React",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Auth.js",
        "Framer Motion",
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 px-6 ">
      <div className="container mx-auto">
        <div className="space-y-3">
          <h2 className="text-sm uppercase tracking-widest font-semibold">
            Experience
          </h2>
          <div className="w-12 h-0.5 bg-primary mb-6 experience-accent-line transform scale-x-0"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`group ${isEven ? "experience-item-left" : "experience-item-right"}`}
              >
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <p className="text-sm font-mono">{exp.period}</p>
                  </div>

                  <div className="lg:col-span-3 space-y-4">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold transition-colors">
                        {exp.title} · {exp.company}
                      </h3>
                      {exp.live && (
                        <a
                          href={exp.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                        >
                          <ExternalLink className="w-4 h-4  transition-opacity" />
                        </a>
                      )}
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs bg-accent/20 text-accent rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
