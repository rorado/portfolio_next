"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isRegistered = false;

export function initGsap() {
  if (isRegistered || typeof window === "undefined") return;

  gsap.registerPlugin(ScrollTrigger, useGSAP);
  isRegistered = true;
}

export { gsap, ScrollTrigger };
