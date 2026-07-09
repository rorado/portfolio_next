"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, initGsap } from "@/lib/gsap";
import { setupHoverLiftAnimation } from "@/lib/animations";

export function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      initGsap();

      // Enhanced stagger animations
      gsap.from(".education-item-left", {
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

      gsap.from(".education-item-right", {
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

      // Hover lift effect
      setupHoverLiftAnimation(".education-item-left, .education-item-right");

      // Accent line reveal
      gsap.to(".education-accent-line", {
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

  const education = [
    {
      period: "2022 — 2024",
      school: "Frontend Masters",
      details:
        "Focused on software engineering, data structures, and web development. Graduated with a capstone project building a scalable web platform.",
      highlights: [
        "Algorithms",
        "Databases",
        "Web Engineering",
        "web development",
        "backend development",
        "capstone project",
      ],
    },
    {
      period: "2021 — 2024",
      school: "1337 coding school",
      details:
        "Built strong foundations in programming, networking, and system administration with hands‑on labs and team projects.",
      highlights: ["Programming", "Networks", "Linux", "Project Work"],
    },
  ];

  return (
    <section ref={sectionRef} id="education" className="py-20 px-6 bg-card/10">
      <div className="container mx-auto">
        <div className="space-y-3">
          <h2 className="text-sm uppercase tracking-widest font-semibold">
            Education
          </h2>
          <div className="w-12 h-0.5 bg-primary mb-6 education-accent-line transform scale-x-0"></div>
        </div>

        <div className="space-y-12">
          {education.map((edu, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`group ${isEven ? "education-item-left" : "education-item-right"}`}
              >
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <p className="text-sm font-mono">{edu.period}</p>
                  </div>
                  <div className="lg:col-span-3 space-y-4">
                    <div className="lg:col-span-3 space-y-4">
                      <h3 className="text-xl font-semibold transition-colors">
                        {edu.school}
                      </h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {edu.details}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-3 py-1 text-xs bg-accent/20 text-accent rounded-full"
                        >
                          {item}
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
