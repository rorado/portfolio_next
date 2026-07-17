"use client";

import { RefObject, Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import {
  View,
  Float,
  MeshDistortMaterial,
  Sparkles,
  PerspectiveCamera,
} from "@react-three/drei";
import { ScrollTrigger } from "@/lib/gsap";
import { SafeEnvironment } from "./safe-environment";

interface HeroSceneProps {
  sectionRef: RefObject<HTMLElement | null>;
  isMobile: boolean;
}

function HoloCore({ isMobile }: { isMobile: boolean }) {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ring1.current) ring1.current.rotation.x += delta * 0.25;
    if (ring2.current) ring2.current.rotation.y += delta * 0.18;
    if (shell.current) shell.current.rotation.y -= delta * 0.08;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.3}>
      <group>
        <mesh>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            attach="material"
            color="#06b6d4"
            emissive="#0891b2"
            emissiveIntensity={0.5}
            distort={0.35}
            speed={1.4}
            roughness={0.15}
            metalness={0.75}
          />
        </mesh>

        <mesh ref={shell} scale={1.4}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.22} />
        </mesh>

        <mesh ref={ring1} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.9, 0.012, 16, 100]} />
          <meshBasicMaterial color="#67e8f9" transparent opacity={0.5} />
        </mesh>

        <mesh ref={ring2} rotation={[0, 0, Math.PI / 4]}>
          <torusGeometry args={[2.2, 0.008, 16, 100]} />
          <meshBasicMaterial color="#818cf8" transparent opacity={0.35} />
        </mesh>

        <Sparkles
          count={isMobile ? 45 : 140}
          scale={isMobile ? 4.5 : 5.5}
          size={2}
          speed={0.3}
          color="#67e8f9"
        />
      </group>
    </Float>
  );
}

function CameraRig({
  sectionRef,
  isMobile,
}: {
  sectionRef: RefObject<HTMLElement | null>;
  isMobile: boolean;
}) {
  const { camera, pointer } = useThree();
  const scrollProgress = useRef(0);
  const target = useRef(new THREE.Vector3(0, 0, 5));

  useEffect(() => {
    if (!sectionRef.current) return;
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        scrollProgress.current = self.progress;
      },
    });
    return () => trigger.kill();
  }, [sectionRef]);

  useFrame(() => {
    const dolly = 5 + scrollProgress.current * 2.2;
    const parallaxX = isMobile ? 0 : pointer.x * 0.6;
    const parallaxY = isMobile ? 0 : pointer.y * 0.35;
    target.current.set(
      parallaxX,
      parallaxY - scrollProgress.current * 0.6,
      dolly,
    );
    camera.position.lerp(target.current, 0.06);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function HeroScene({ sectionRef, isMobile }: HeroSceneProps) {
  return (
    <View className="absolute inset-0 h-full w-full">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={35} />
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 3]} intensity={1.4} color="#22d3ee" />
      <pointLight position={[-3, -2, -2]} intensity={0.7} color="#818cf8" />
      <Suspense fallback={null}>
        <HoloCore isMobile={isMobile} />
      </Suspense>
      {!isMobile && <SafeEnvironment preset="city" />}
      <CameraRig sectionRef={sectionRef} isMobile={isMobile} />
    </View>
  );
}
