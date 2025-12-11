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
              Passionate Developer Creating Impactful Digital Experiences
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
              I'm a full-stack developer with a deep love for clean design, powerful performance, and intuitive UX. My mission is to create seamless web experiences that feel effortless.
            </p>
            <p>
              With expertise in technologies like React, Next.js, and Tailwind, I craft products that are not only functional but also delightful to use — bridging creativity and engineering.
            </p>
            <p>
              Outside of coding, I&lsquom passionate about learning new frameworks, exploring design trends, and contributing to open-source projects that push the web forward.
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
