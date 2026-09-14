//@ts-nocheck

import { Suspense, useState } from "react";

import {
  Environment,
  Points,
  PointMaterial,
  Stars,
  Stats,
} from "@react-three/drei";

export default function Planet() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Mooon />
        <Model />
      </Suspense>
    </Canvas>
  );
}

import * as THREE from "three";
import React, { useRef } from "react";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";

function Model(props) {
  const sphereRef = useRef();

  const base = useLoader(THREE.TextureLoader, "/planet/mars.jpg");

  useFrame(() => {
    sphereRef.current.rotation.y += 0.001;
  });
  return (
    <>
      <directionalLight intensity={0} />
      <mesh position-y={-1} ref={sphereRef}>
        <sphereGeometry args={[2, 36, 36]} />
        <meshPhysicalMaterial map={base} />
        <Stars radius={500} depth={50} count={1000} factor={10} />
      </mesh>
    </>
  );
}

function Mooon(props) {
  const sphereRef = useRef(null);

  const base = useLoader(THREE.TextureLoader, "/planet/moon.jpg");

  useFrame(() => {
    sphereRef.current.rotation.x += 0.001;
    sphereRef.current.rotation.z += 0.001;
  });
  return (
    <>
      <directionalLight />
      <mesh scale={0.2} position-y={2.5} ref={sphereRef}>
        <sphereGeometry args={[2, 36, 36]} />
        <meshPhysicalMaterial map={base} />
      </mesh>
    </>
  );
}
