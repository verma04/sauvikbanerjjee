import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Html,
  Environment,
  useGLTF,
  ContactShadows,
  OrbitControls,
} from "@react-three/drei";
import { Box } from "@chakra-ui/react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import ReactPlayer from "react-player";
const Monitor = ({ ve }) => {
  return (
    <Canvas camera={{ position: [-5, 0, -15], fov: 55 }}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
          <Model ve={ve} />
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
    </Canvas>
  );
};

export default Monitor;

export function Model(props) {
  const { nodes, materials } = useLoader(GLTFLoader, "/DataMonitor.glb");
  return (
    <group scale={2.5} position-y={-4} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, 126.75, -3.31]} scale={[115.88, 100, 100]}>
            <group
              position={[0, -0.63, -0.12]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.77, 1, 1]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane001_Material_0.geometry}
                material={materials["Material.001"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Monitor_Material_0.geometry}
              material={materials["Material.001"]}
            >
              <Html position={[0, 0.1, 0]} transform occlude>
                <Box
                  width={"5.5rem"}
                  height="3rem"
                  bgColor={"red"}
                  onPointerDown={(e) => e.stopPropagation()}
                >
                  <Box height={"100%"} width="100%" bgColor={"green"}>
                    <video
                      autoPlay
                      width="100%"
                      height="100%"
                      src="https://res.cloudinary.com/dwjlja8hw/video/upload/v1680172256/butterfly_painted_lady_venessa_cardui_521_cenugp.mp4"
                    ></video>
                  </Box>
                </Box>
              </Html>
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}
