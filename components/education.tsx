"use client";

import { motion, Variants } from "framer-motion";

export function Education() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemLeft: Variants = {
    hidden: { opacity: 0, x: -90 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const itemRight: Variants = {
    hidden: { opacity: 0, x: 90 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

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
      ],
    },
    {
      period: "2021 — 2023",
      school: "42 Network",
      details:
        "Built strong foundations in programming, networking, and system administration with hands‑on labs and team projects.",
      highlights: ["Programming", "Networks", "Linux", "Project Work"],
    },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-card/10">
      <div className="container mx-auto">
        <div className="space-y-3">
          <h2 className="text-sm uppercase tracking-widest font-semibold">
            Education
          </h2>
          <div className="w-12 h-0.5 bg-primary mb-6"></div>
        </div>

        <motion.div
          className="space-y-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {education.map((edu, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className="group"
                variants={isEven ? itemLeft : itemRight}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.3 }}
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
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
