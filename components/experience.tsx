"use client";

import { ExternalLink } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      period: "2023 — 2024",
      title: "web devloper",
      company: "Vierra Digital LLC",
      live: "https://vierradev.com/",
      description:
        "Build and maintain critical components used to construct TechCorp's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility and performance.",
      technologies: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Prisma",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 ">
      <div className="container mx-auto">
        <div className="space-y-3">
          <h2 className="text-sm uppercase tracking-widest font-semibold">
            experienceTitle
          </h2>
          <div className="w-12 h-0.5 bg-primary mb-6"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <p className="text-sm font-mono">{exp.period}</p>
                </div>

                <div className="lg:col-span-3 space-y-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold transition-colors">
                      {exp.title} · {exp.company}
                    </h3>
                    <a
                      href={exp.live}
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4  transition-opacity" />
                    </a>
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
          ))}
        </div>
      </div>
    </section>
  );
}
