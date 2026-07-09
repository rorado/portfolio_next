"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, initGsap } from "@/lib/gsap";
import {
  setupHoverLiftAnimation,
  scaleRevealAnimation,
} from "@/lib/animations";

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      initGsap();

      // Staggered scale and fade in
      gsap.from(".project-card", {
        opacity: 0,
        y: 40,
        scale: 0.92,
        duration: 0.75,
        stagger: 0.18,
        ease: "back.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      // Setup hover lift animations on all cards
      setupHoverLiftAnimation(".project-card");

      // Image parallax on scroll
      gsap.utils.toArray<HTMLElement>(".project-image").forEach((img) => {
        gsap.to(img, {
          y: 20,
          scrollTrigger: {
            trigger: img,
            start: "top center",
            end: "center center",
            scrub: 1.5,
          },
        });
      });

      // Accent line reveal
      gsap.to(".projects-accent-line", {
        scaleX: 1,
        transformOrigin: "left center",
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef },
  );

  const projects = [
    {
      title: "E‑Commerce Platform",
      description:
        "A production‑grade storefront with product search, secure checkout, and an admin dashboard. Designed for speed with edge caching and optimized images.",
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
      title: "AI‑Powered Journal",
      description:
        "A mindful journaling app that turns daily notes into insights with AI summaries, sentiment analysis, and personalized prompts.",
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
        "A clean REST API with pagination, filtering, and role‑based access for managing books, authors, and inventory.",
      // image: "/task-management-interface.png",
      technologies: ["Express", "Node.js", "REST API", "Prisma"],
      github: "https://github.com/rorado/express_books_store",
      // live: "#",
    },
    {
      title: "Pizza Commerce",
      description:
        "A full‑stack ordering experience with customizable items, real‑time order tracking, and an admin suite for products and fulfillment.",
      image: "/PizzaSite.png",
      technologies: ["Next.js", "Auth.js", "Node.js", "REST APIs", "Prisma"],
      github: "https://github.com/rorado/full_stack_food_next",
      live: "https://full-stack-pizza.vercel.app",
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="space-y-3">
          <h2 className="text-sm uppercase tracking-widest font-semibold">
            Selected Projects
          </h2>
          <div className="w-12 h-0.5 bg-primary mb-6 projects-accent-line transform scale-x-0"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <Card className="group border-border hover:border-primary/50 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg cursor-pointer ">
                    {project.image ? (
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 project-image"
                      />
                    ) : (
                      <div className="w-full h-48 bg-muted flex items-center justify-center text-foreground/50" />
                    )}

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 bg-linear-to-t from-background/60 via-background/20 to-transparent">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-primary hover:text-primary-foreground hover:scale-90 transition-colors"
                        title="View code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-primary hover:text-primary-foreground hover:scale-90 transition-colors"
                          title="View project"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
