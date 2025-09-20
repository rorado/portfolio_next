"use client"

import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { getTranslation } from "@/lib/i18n"

export function Experience() {
  const { language } = useLanguage()

  const experiences = [
    {
      period: "2024 — PRESENT",
      title: getTranslation(language, "seniorDeveloper"),
      company: "TechCorp",
      description:
        "Build and maintain critical components used to construct TechCorp's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility and performance.",
      technologies: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Prisma"],
    },
    {
      period: "2022 — 2024",
      title: getTranslation(language, "fullStackDeveloper"),
      company: "StartupXYZ",
      description:
        "Developed and shipped highly interactive web applications for millions of users. Collaborated with a team of designers and developers to create seamless user experiences using modern web technologies.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    },
    {
      period: "2020 — 2022",
      title: "Frontend Developer",
      company: "Digital Agency",
      description:
        "Created responsive web applications and landing pages for various clients. Focused on performance optimization and cross-browser compatibility while maintaining pixel-perfect designs.",
      technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "SASS"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto">
        <div className="space-y-2 mb-12">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground">
            {getTranslation(language, "experienceTitle")}
          </h2>
          <div className="w-12 h-0.5 bg-primary"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
                </div>

                <div className="lg:col-span-3 space-y-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {exp.title} · {exp.company}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 text-xs bg-accent/20 text-accent rounded-full">
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
  )
}
