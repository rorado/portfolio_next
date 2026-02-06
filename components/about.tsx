"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <h2 className="text-sm uppercase tracking-widest font-semibold">
                About Me
              </h2>
              <div className="w-12 h-0.5 bg-primary"></div>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Building products that feel effortless and look unforgettable
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I&apos;m a full‑stack developer who loves clean interfaces,
              reliable architecture, and performance that scales. My focus is
              crafting digital experiences that are intuitive, fast, and
              accessible.
            </p>
            <p>
              I work across the stack with React, Next.js, and TypeScript,
              bridging product design and engineering to deliver polished
              solutions from concept to launch.
            </p>
            <p>
              When I&apos;m not coding, I explore new frameworks, study design
              systems, and contribute to open‑source tools that help teams ship
              faster.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/2" />
      </div>
    </section>
  );
}
