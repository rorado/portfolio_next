"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("About");

  return (
    <section
      id="about"
      className="py-24 px-6 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* --- Left Content --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <h2 className="text-sm uppercase tracking-widest font-semibold">
                {t("title")}
              </h2>
              <div className="w-12 h-0.5 bg-primary"></div>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {t("subtitle")}
            </h3>
          </motion.div>

          {/* --- Right Content --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
          </motion.div>
        </div>
      </div>

      {/* --- Subtle gradient background flair --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/2" />
      </div>
    </section>
  );
}
