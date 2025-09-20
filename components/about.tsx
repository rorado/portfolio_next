"use client"

import { useLanguage } from "@/components/language-context"
import { getTranslation } from "@/lib/i18n"

export function About() {
  const { language } = useLanguage()

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground">
                {getTranslation(language, "aboutTitle")}
              </h2>
              <div className="w-12 h-0.5 bg-primary"></div>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-balance">{getTranslation(language, "aboutSubtitle")}</h3>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>{getTranslation(language, "aboutDescription1")}</p>
            <p>{getTranslation(language, "aboutDescription2")}</p>
            <p>{getTranslation(language, "aboutDescription3")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
