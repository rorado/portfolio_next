"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, initGsap } from "@/lib/gsap";

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      initGsap();

      // Staggered reveal with scale
      gsap.from(".skill-category", {
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Individual skill items stagger
      gsap.utils.toArray<HTMLElement>(".skill-item").forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          x: -20,
          duration: 0.6,
          delay: 0.3 + index * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        });
      });

      // Accent line reveal
      gsap.to(".skills-accent-line", {
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

      // Hover indicator animation
      const skillItems = gsap.utils.toArray<HTMLElement>(".skill-item");
      skillItems.forEach((item) => {
        const dot = item.querySelector(".skill-dot");
        if (dot) {
          item.addEventListener("mouseenter", () => {
            gsap.to(dot, {
              scale: 1.5,
              background: "var(--primary)",
              duration: 0.3,
              ease: "power2.out",
            });
          });
          item.addEventListener("mouseleave", () => {
            gsap.to(dot, {
              scale: 1,
              background: "var(--primary)",
              duration: 0.3,
              ease: "power2.out",
            });
          });
        }
      });
    },
    { scope: sectionRef },
  );

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Redux",
        "Framer Motion",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express",
        "Prisma",
        "PostgreSQL",
        "REST APIs",
        "Auth.js",
      ],
    },
    {
      title: "Tooling",
      skills: ["Git", "Vercel", "GitHub", "VS Code", "shell"],
    },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-6 bg-card/10">
      <div className="container mx-auto">
        <div className="space-y-3">
          <h2 className="text-sm uppercase tracking-widest font-semibold">
            Skills
          </h2>
          <div className="w-12 h-0.5 bg-primary mb-6 skills-accent-line transform scale-x-0"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6 skill-category">
              <h3 className="text-xl font-semibold text-foreground">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 skill-item cursor-pointer transition-all group"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full skill-dot transition-all"></div>
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
