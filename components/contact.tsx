"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { sendMail } from "@/lib/sendEmail";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, initGsap } from "@/lib/gsap";
import { setupHoverLiftAnimation } from "@/lib/animations";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      initGsap();

      // Enhanced card entrance
      gsap.from(".contact-card", {
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 0.75,
        stagger: 0.15,
        ease: "back.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Form entrance with blur
      gsap.from(".contact-form", {
        opacity: 0,
        x: 80,
        filter: "blur(10px)",
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Setup hover lift on cards
      setupHoverLiftAnimation(".contact-card");

      // Accent line reveal
      gsap.to(".contact-accent-line", {
        scaleX: 1,
        transformOrigin: "left center",
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Icon pulse on hover
      const icons = gsap.utils.toArray<HTMLElement>(".contact-icon");
      icons.forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            scale: 1.3,
            rotation: 15,
            duration: 0.3,
            ease: "elastic.out(1, 0.4)",
          });
        });
        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "elastic.out(1, 0.4)",
          });
        });
      });
    },
    { scope: sectionRef },
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await sendMail(
      formData.subject,
      `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Message:</strong><br/>${formData.message}</p>
    `,
    );

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance ">
            Have a project in mind? I&rsquo;m currently available for freelance
            work and full-time opportunities. Let&rsquo;s discuss how we can
            build something exceptional together.
          </h2>
          <div className="w-12 h-0.5 bg-primary mb-6 mx-auto contact-accent-line transform scale-x-0"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="grid gap-6">
              <div className="contact-card">
                <Card className="bg-card/50 border-border hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center contact-icon">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Email
                      </h3>
                      <p className="text-muted-foreground">
                        sohaybahrich3@gmail.com
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="contact-card">
                <Card className="bg-card/50 border-border hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center contact-icon">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Phone
                      </h3>
                      <p className="text-muted-foreground">+212690201401</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="contact-card">
                <Card className="bg-card/50 border-border hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center contact-icon">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Location
                      </h3>
                      <p className="text-muted-foreground">Tetouan, Morocco</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <Card className="bg-card/50 border-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="bg-background/50 border-border focus:border-primary transition-colors mt-1.5"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        required
                        className="bg-background/50 border-border focus:border-primary transition-colors mt-1.5"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-foreground"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project idea, collaboration, or hire"
                      required
                      className="bg-background/50 border-border focus:border-primary transition-colors mt-1.5"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, goals, and timeline."
                      required
                      rows={5}
                      className="bg-background/50 border-border focus:border-primary transition-colors resize-none mt-1.5"
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
                        Message sent
                      </>
                    ) : isSubmitting ? (
                      <>
                        <div className="w-4 h-4 mr-2 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* <footer className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">"footer</p>
        </footer> */}
      </div>
    </section>
  );
}
