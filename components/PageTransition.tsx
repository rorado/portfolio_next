"use client";

import React, { ReactNode, useRef } from "react";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { gsap, initGsap } from "@/lib/gsap";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  const transitionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      initGsap();

      // Premium page transition with stagger
      const timeline = gsap.timeline();

      timeline.fromTo(
        transitionRef.current,
        {
          opacity: 0,
          y: 15,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.5,
          ease: "power3.out",
        },
      );

      // Animate children elements
      gsap.from(".stagger-item", {
        opacity: 0,
        y: 20,
        duration: 0.4,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.1,
      });
    },
    { dependencies: [pathname], scope: transitionRef },
  );

  return (
    <div key={pathname} ref={transitionRef}>
      {children}
    </div>
  );
}
