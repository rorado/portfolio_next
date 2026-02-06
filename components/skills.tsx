"use client";

import { motion } from "framer-motion";

// import { useLanguage } from "@/components/language-context"
// import { getTranslation } from "@/lib/i18n"

export function Skills() {
  //   const { language } = useLanguage()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

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
      title: "Tooling & DevOps",
      skills: ["Git", "Vercel", "Docker", "CI/CD", "Storybook", "Figma"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-card/10">
      <div className="container mx-auto">
        <div className="space-y-3">
          <h2 className="text-sm uppercase tracking-widest font-semibold">
            Skills
          </h2>
          <div className="w-12 h-0.5 bg-primary mb-6"></div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} className="space-y-6" variants={item}>
              <h3 className="text-xl font-semibold text-foreground">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
