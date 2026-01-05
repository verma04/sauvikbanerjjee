
"use client"
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import DadaAnimated from './DataAnimatedAvatar'

export default function Jump() {
  return (
    <Canvas  style={{width:"100vw" , height:"150vh"  ,}} >
      <OrbitControls />
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.5} />
      <Suspense fallback={null}>
        <DadaAnimated />
      </Suspense>
    </Canvas>
  );
}
