"use client"

import { useLanguage } from "@/components/language-context"
import { getTranslation } from "@/lib/i18n"

export function Skills() {
  const { language } = useLanguage()

  const skillCategories = [
    {
      title: getTranslation(language, "frontend"),
      skills: ["React", "Next.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Vue.js"],
    },
    {
      title: getTranslation(language, "backend"),
      skills: ["Node.js", "Express", "Prisma", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
    },
    {
      title: getTranslation(language, "tools"),
      skills: ["Git", "Docker", "AWS", "Vercel", "Jest", "Webpack", "Linux"],
    },
  ]

  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="container mx-auto">
        <div className="space-y-2 mb-12">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground">
            {getTranslation(language, "skillsTitle")}
          </h2>
          <div className="w-12 h-0.5 bg-primary"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
