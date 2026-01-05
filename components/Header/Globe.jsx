import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

const Globe = () => {
  // This reference gives us direct access to our points
  const points = useRef();
  useFrame(() => {
    points.current.rotation.x += 0.001;
    points.current.rotation.z += 0.001;
    points.current.rotation.y += 0.001;
  });
  // You can see that, like our mesh, points also takes a geometry and a material,
  // but a specific material => pointsMaterial
  return (
    <points ref={points}>
      <sphereGeometry args={[1, 48, 48]} />
      <pointsMaterial color="#5786F5" size={0.015} sizeAttenuation />
      <Stars radius={500} depth={50} count={1000} factor={10} />
    </points>
  );
};

export default Globe;
