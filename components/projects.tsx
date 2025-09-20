"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { getTranslation } from "@/lib/i18n"

export function Projects() {
  const { language } = useLanguage()

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution built with Next.js, Prisma, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "/modern-ecommerce-dashboard.png",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "TypeScript"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/task-management-interface.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "Data visualization dashboard that displays weather patterns and analytics using Chart.js and external weather APIs.",
      image: "/weather-analytics-dashboard.jpg",
      technologies: ["Vue.js", "Chart.js", "Node.js", "REST APIs", "CSS3"],
      github: "https://github.com",
      live: "https://example.com",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="space-y-2 mb-12">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground">
            {getTranslation(language, "projectsTitle")}
          </h2>
          <div className="w-12 h-0.5 bg-primary"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      title={getTranslation(language, "viewCode")}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      title={getTranslation(language, "viewProject")}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
