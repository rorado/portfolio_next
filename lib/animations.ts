import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ============================================
// TEXT REVEAL ANIMATIONS
// ============================================

export const revealTextAnimation = (target: string | Element, options = {}) => {
  const defaults = {
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.05,
    ...options,
  };

  return gsap.from(target, {
    opacity: 0,
    y: 30,
    duration: defaults.duration,
    ease: defaults.ease,
    stagger: defaults.stagger,
  });
};

// ============================================
// PARALLAX ANIMATIONS
// ============================================

export const parallaxAnimation = (
  target: string | Element,
  distance: number = -50,
  trigger?: string | Element,
) => {
  return gsap.to(target, {
    y: distance,
    scrollTrigger: {
      trigger: trigger || target,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      once: false,
    },
    ease: "none",
  });
};

// ============================================
// STAGGERED ENTRANCE ANIMATION
// ============================================

export const staggerEntranceAnimation = (
  targets: string | Element[],
  options = {},
) => {
  const defaults = {
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.12,
    y: 40,
    opacity: 0,
    ...options,
  };

  return gsap.from(targets, {
    y: defaults.y,
    opacity: defaults.opacity,
    duration: defaults.duration,
    ease: defaults.ease,
    stagger: defaults.stagger,
  });
};

// ============================================
// SCROLL TRIGGER FADE IN
// ============================================

export const scrollFadeInAnimation = (
  target: string | Element,
  options = {},
) => {
  const defaults = {
    from: {
      opacity: 0,
      y: 60,
    },
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: target,
      start: "top 75%",
      end: "top 25%",
      toggleActions: "play none none none",
      once: true,
    },
    ...options,
  };

  return gsap.fromTo(target, defaults.from, {
    opacity: 1,
    y: 0,
    duration: defaults.duration,
    ease: defaults.ease,
    scrollTrigger: defaults.scrollTrigger,
  });
};

// ============================================
// FLOATING ANIMATION (for buttons/elements)
// ============================================

export const floatingAnimation = (
  target: string | Element,
  distance: number = 10,
  duration: number = 3,
) => {
  return gsap.to(target, {
    y: -distance,
    duration: duration,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
};

// ============================================
// GLOW PULSE ANIMATION
// ============================================

export const glowPulseAnimation = (target: string | Element) => {
  return gsap.to(target, {
    boxShadow: "0 0 40px rgba(6, 182, 212, 0.5)",
    duration: 1,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
  });
};

// ============================================
// SLIDE IN FROM SIDES
// ============================================

export const slideInAnimation = (
  target: string | Element,
  direction: "left" | "right" = "left",
  scrollTrigger = true,
) => {
  const x = direction === "left" ? -100 : 100;
  const config: Record<string, unknown> = {
    x,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  };

  if (scrollTrigger) {
    config.scrollTrigger = {
      trigger: target,
      start: "top 75%",
      toggleActions: "play none none none",
      once: true,
    };
  }

  return gsap.from(target, config);
};

// ============================================
// STAGGER SLIDE IN (alternating sides)
// ============================================

export const staggerSlideAnimation = (
  targets: string | Element[],
  scrollTrigger = true,
) => {
  const timeline = gsap.timeline();

  gsap.utils.toArray<HTMLElement>(targets).forEach((target, index) => {
    const isEven = index % 2 === 0;
    const x = isEven ? -90 : 90;

    const config: Record<string, unknown> = {
      x,
      opacity: 0,
      duration: 1.1,
      ease: "power3.out",
    };

    if (scrollTrigger) {
      config.scrollTrigger = {
        trigger: target.closest("section") || target,
        start: "top 75%",
        toggleActions: "restart none restart none",
      };
    }

    timeline.from(target, config, 0.2);
  });

  return timeline;
};

// ============================================
// SCALE & REVEAL ANIMATION
// ============================================

export const scaleRevealAnimation = (
  target: string | Element,
  fromScale: number = 0.85,
  scrollTrigger = true,
) => {
  const config: Record<string, unknown> = {
    scale: fromScale,
    opacity: 0,
    duration: 0.9,
    ease: "back.out",
  };

  if (scrollTrigger) {
    config.scrollTrigger = {
      trigger: target,
      start: "top 75%",
      toggleActions: "play none none none",
      once: true,
    };
  }

  return gsap.from(target, config);
};

// ============================================
// WORD REVEAL ANIMATION
// ============================================

export const wordRevealAnimation = (target: string | Element) => {
  const element =
    typeof target === "string" ? document.querySelector(target) : target;
  if (!element) return;

  const text = element.textContent || "";
  const words = text.split(" ");

  element.innerHTML = words
    .map(
      (word) =>
        `<span class="inline-block" style="overflow: hidden;"><span class="word-reveal inline-block">${word}</span></span>`,
    )
    .join(" ");

  return gsap.from(".word-reveal", {
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.08,
    ease: "power3.out",
  });
};

// ============================================
// HOVER LIFT ANIMATION
// ============================================

export const setupHoverLiftAnimation = (targets: string) => {
  const cards = gsap.utils.toArray<HTMLElement>(targets);

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -12,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
  });
};

// ============================================
// GRADIENT ANIMATION
// ============================================

export const gradientShiftAnimation = (target: string | Element) => {
  return gsap.to(target, {
    backgroundPosition: "200% center",
    duration: 8,
    repeat: -1,
    ease: "none",
  });
};

// ============================================
// BLUR IN ANIMATION
// ============================================

export const blurInAnimation = (target: string | Element) => {
  return gsap.from(target, {
    opacity: 0,
    filter: "blur(10px)",
    duration: 1,
    ease: "power2.out",
  });
};

// ============================================
// COUNTER ANIMATION (for stats/numbers)
// ============================================

export const counterAnimation = (
  target: HTMLElement,
  from: number,
  to: number,
  duration: number = 2,
) => {
  const obj = { value: from };

  return gsap.to(obj, {
    value: to,
    duration: duration,
    onUpdate: () => {
      target.textContent = Math.floor(obj.value).toString();
    },
    ease: "power2.out",
  });
};

// ============================================
// MAGNETIC BUTTON EFFECT
// ============================================

export const setupMagneticButton = (selector: string) => {
  const buttons = gsap.utils.toArray<HTMLElement>(selector);

  buttons.forEach((button) => {
    const xTo = gsap.quickTo(button, "x", {
      duration: 0.3,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(button, "y", {
      duration: 0.3,
      ease: "power3.out",
    });

    button.addEventListener("mousemove", (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      xTo(x * 0.3);
      yTo(y * 0.3);
    });

    button.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  });
};

// ============================================
// SCROLL PROGRESS ANIMATION
// ============================================

export const createScrollProgressBar = (selector: string) => {
  const bar = document.querySelector(selector) as HTMLElement;
  if (!bar) return;

  gsap.to(bar, {
    scaleX: 1,
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      onUpdate: (self) => {
        gsap.set(bar, {
          scaleX: self.progress,
        });
      },
    },
  });
};

// ============================================
// BACKGROUND PARTICLE ANIMATION
// ============================================

export const particleBackgroundAnimation = (
  container: HTMLElement,
  particleCount: number = 20,
) => {
  const particles: HTMLElement[] = [];

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.style.position = "absolute";
    particle.style.width = "4px";
    particle.style.height = "4px";
    particle.style.borderRadius = "50%";
    particle.style.background = "rgba(6, 182, 212, 0.3)";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";

    container.appendChild(particle);
    particles.push(particle);

    gsap.to(particle, {
      x: () => (Math.random() - 0.5) * 200,
      y: () => (Math.random() - 0.5) * 200,
      opacity: 0,
      duration: 3 + Math.random() * 2,
      repeat: -1,
      repeatDelay: 0.5,
      ease: "none",
    });
  }

  return particles;
};
