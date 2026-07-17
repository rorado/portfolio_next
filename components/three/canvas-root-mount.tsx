"use client";

import dynamic from "next/dynamic";

const CanvasRoot = dynamic(() => import("./canvas-root"), { ssr: false });

export default function CanvasRootMount() {
  return <CanvasRoot />;
}
