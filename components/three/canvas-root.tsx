"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { use3DCapability } from "./use-3d-capability";

/**
 * Single shared, transparent, fixed-position canvas mounted once at the app
 * root. Individual sections never render their own <Canvas> — they drop a
 * tracked <View> (see components/three/tracked-view.tsx) that portals its
 * scene graph into this canvas and gets clipped to that element's on-screen
 * rect every frame. Keeps us to one WebGL context for the whole page.
 */
export default function CanvasRoot() {
  const { enabled, isMobile, ready } = use3DCapability();

  if (!ready || !enabled) return null;

  return (
    <Canvas
      className="-z-10"
      style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh" }}
      eventSource={document.body}
      eventPrefix="client"
      dpr={[1, isMobile ? 1.5 : 2]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <View.Port />
      </Suspense>
      {!isMobile && (
        <EffectComposer multisampling={0} enableNormalPass={false}>
          <Bloom
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            intensity={0.55}
            mipmapBlur
            radius={0.7}
          />
        </EffectComposer>
      )}
    </Canvas>
  );
}
