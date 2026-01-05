
"use client"
import { Box } from "@chakra-ui/react";
import { OrbitControls, Stars, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import DadaAnimated from './DadaAnimation'

const DadaAvatar = () => {
  return (

    <Canvas style={{ width: "100%", height: "100%" }} >

      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.5} />
      <Suspense fallback={null}>


        <DadaAnimated />
        <Stats />
      </Suspense>

    </Canvas>

  );
}


export default DadaAvatar