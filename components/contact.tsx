"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react"
// import { useLanguage } from "@/components/language-context"
// import { getTranslation } from "@/lib/i18n"

export function Contact() {
//   const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance ">contactTitle</h2>
          <p className=" max-w-2xl mx-auto leading-relaxed">
            contactDescription
          </p>
          <div className="w-12 h-0.5 bg-primary mb-6 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="grid gap-6">
              <Card className="bg-card/50 border-border hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">email</h3>
                    <p className="text-muted-foreground">alex@example.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">location</h3>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                     name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={"namePlaceholder"}
                      required
                      className="bg-background/50 border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                        email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="emailPlaceholder"
                      required
                      className="bg-background/50 border-border focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="subjectPlaceholder"
                    required
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="messagePlaceholder"
                    required
                    rows={5}
                    className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      messageSent
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      sending
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      sendMessage
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <footer className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">"footer</p>
        </footer>
      </div>
    </section>
  )
}
