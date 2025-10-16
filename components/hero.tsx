"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { getTranslation } from "@/lib/i18n"

export function Hero() {
  const { language } = useLanguage()

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-balance">{getTranslation(language, "name")}</h1>
            <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium">
              {getTranslation(language, "title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {getTranslation(language, "heroDescription")}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {getTranslation(language, "viewWork")}
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-border text-foreground hover:bg-secondary"
            >
              {getTranslation(language, "contactMe")}
            </Button>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:alex@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-primary/30 rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl font-bold text-foreground">AJ</span>
              </div>
              <p className="text-muted-foreground">{getTranslation(language, "title")}</p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  )
}
