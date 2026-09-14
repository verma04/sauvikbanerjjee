import { Suspense, useState } from "react";



export default function Moon() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Model />
        <Stars radius={500} depth={50} count={1000} factor={10} />
      </Suspense>
    </Canvas>
  );
}

import * as THREE from "three";
import React, { useRef } from "react";

import { Canvas, useFrame, useLoader } from "@react-thpsree/fiber";
import { Stars } from "@react-three/drei";

function Model(props) {
  const sphereRef = useRef(null);


  const base = useLoader(THREE.TextureLoader, "/planet/moon.jpg");

  useFrame(() => {
    sphereRef.current.rotation.x += 0.001;
    sphereRef.current.rotation.z += 0.001;
  });
  return (
    <>
      <directionalLight intensity={1} />
      <mesh ref={sphereRef}>
        <sphereGeometry args={[2, 36, 36]} />
        <meshPhysicalMaterial map={base} />
        
      </mesh>
    </>
  );
}


