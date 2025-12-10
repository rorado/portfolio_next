"use client"

// import { useLanguage } from "@/components/language-context"
// import { getTranslation } from "@/lib/i18n"

export function Skills() {
//   const { language } = useLanguage()

  const skillCategories = [
    {
      title: "frontend",
      skills: ["React", "Next.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Vue.js"],
    },
    {
      title: "backend",
      skills: ["Node.js", "Express", "Prisma", "PostgreSQL", "REST APIs"],
    },
  ]

  return (
    <section className="py-20 px-6 bg-card/10">
      <div className="container mx-auto">
        <div className="space-y-3">
            <h2 className="text-sm uppercase tracking-widest font-semibold">
              skillsTitle
            </h2>
            <div className="w-12 h-0.5 bg-primary mb-6"></div>
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
