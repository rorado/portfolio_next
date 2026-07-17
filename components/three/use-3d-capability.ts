"use client";

import { useEffect, useState } from "react";
import {
  hasWebGL,
  isMobileViewport,
  prefersReducedMotion,
} from "@/lib/three/capabilities";

interface Capability {
  /** True once we've confirmed WebGL is usable and motion isn't reduced. */
  enabled: boolean;
  /** True on small viewports — scenes should shed weight (particles, HDRI, bloom). */
  isMobile: boolean;
  /** True once the client-side check has run (avoids SSR/hydration flash logic). */
  ready: boolean;
}

export function use3DCapability(): Capability {
  const [state, setState] = useState<Capability>({
    enabled: false,
    isMobile: false,
    ready: false,
  });

  useEffect(() => {
    const update = () =>
      setState({
        enabled: hasWebGL() && !prefersReducedMotion(),
        isMobile: isMobileViewport(),
        ready: true,
      });

    update();

    const mq = window.matchMedia("(max-width: 767px)");
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return state;
}
