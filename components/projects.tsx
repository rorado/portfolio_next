"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
// import { useLanguage } from "@/components/language-context"
// import { getTranslation } from "@/lib/i18n"

export function Projects() {
  //   const { language } = useLanguage()

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application built with Next.js, Prisma, and PostgreSQL. Includes user authentication, product management, payment processing, and an admin dashboard.",
      image: "/CosmicSite.png",
      technologies: [
        "Next.js",
        "Prisma",
        "PostgreSQL",
        "Auth.js",
        "TypeScript",
        "Shadcn UI",
      ],
      github: "https://github.com/rorado/nextJs_Ecommerse",
      live: "https://fluffy-choux-fc8754.netlify.app",
    },
    {
      title: "AI-Powered Journal App",
      description:
        "A smart journaling app that uses AI to help users reflect on their day. It can generate journal entries, provide insights, and offer advice or evaluations based on the user's input.",
      image: "/journalApp.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Langchain",
        "Tailwind CSS",
        "zod",
        
      ],
      github: "https://github.com/rorado/AI_journaly",
      live: "https://ai-journal-rorado.vercel.app/",
    },
    {
      title: "Book Store API",
      description:
        "A RESTful API for managing books, authors, and inventory. Built with Express, Node.js, and Prisma for efficient database operations.",
      // image: "/task-management-interface.png",
      technologies: ["Express", "Node.js", "REST API", "Prisma"],
      github: "https://github.com/rorado/express_books_store",
      // live: "#",
    },
    {
      title: "E-Commerce Pizza Site",
      description:
        "A full-stack e-commerce pizza ordering platform built with Next.js, Prisma, and Node.js. Users can browse pizzas, customize orders, manage their cart, authenticate, and track orders. Includes an admin interface for product and order management.",
      image: "/PizzaSite.png",
      technologies: ["Next.js", "Auth.js", "Node.js", "REST APIs", "Prisma"],
      github: "https://github.com/rorado/full_stack_food_next",
      live: "https://full-stack-pizza.vercel.app",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="space-y-3">
          <h2 className="text-sm uppercase tracking-widest font-semibold">
            projectsTitle
          </h2>
          <div className="w-12 h-0.5 bg-primary mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group border-border hover:border-primary/50 thover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg cursor-pointer ">
                  {project.image ? (
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-48 bg-muted flex items-center justify-center text-foreground/50" />
                  )}

                  <div className="absolute inset-0 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary hover:text-primary-foreground hover:scale-90 transition-colors"
                      title={"viewCode"}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-primary hover:text-primary-foreground hover:scale-90 transition-colors"
                        title={"viewProject"}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

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
  );
}
