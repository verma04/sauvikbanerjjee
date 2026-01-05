import * as THREE from 'three'
import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { EffectComposer, DepthOfField } from '@react-three/postprocessing'
import Globe from './Globe'

function Galaxy({ dof }) {

  const particles = useRef()
  //const [movement] = useState(() => new THREE.Vector3())
  const [temp] = useState(() => new THREE.Vector3())
  const [focus] = useState(() => new THREE.Vector3())

  useEffect(() => {
    generateGalaxy()
  })

  useFrame((state, delta) => {
    //dof.current.target = focus.lerp(particles.current.position, 0.05)
    //movement.lerp(temp.set(state.mouse.x, state.mouse.y * 0.2, 0), 0.2)
    if (dof.current) {
      dof.current.circleOfConfusionMaterial.uniforms.focusDistance.value = 1.0
      dof.current.circleOfConfusionMaterial.uniforms.focalLength.value = 0.05
      dof.current.resolution.height = 480
      dof.current.resolution.width = 1280
      dof.current.target = new THREE.Vector3(0, 0, 0)
      dof.current.blendMode.opacity.value = 1
    }

    if (false) {
      //particles.current.position.x = THREE.MathUtils.lerp(particles.current.position.x, state.mouse.x * 20, 0.2)
      particles.current.rotation.x = THREE.MathUtils.lerp(particles.current.rotation.x, state.mouse.y / 10, 0.2)
      particles.current.rotation.y = THREE.MathUtils.lerp(particles.current.rotation.y, -state.mouse.x / 2, 0.2)
    }

    // TODO use delta instead
    if (true) {
      const elapsedTime = state.clock.getElapsedTime()
      particles.current.rotation.y = 0.05 * elapsedTime
    }
  })

  const generateGalaxy = () => {
    const positions = new Float32Array(100000 * 3)
    const colors = new Float32Array(100000 * 3)
    //const colorInside = new THREE.Color(#ff6030)
    //const colorOutside = new THREE.Color(#1b3984)
    const colorInside = new THREE.Color(1.0, 0.3765, 0.1882)
    const colorOutside = new THREE.Color(0.10588, 0.22353, 0.51765)

    for (let i = 0; i < 100000; i++) {
      const i3 = i * 3

      const radius = Math.random() * 5
      const spinAngle = radius * 1.25
      const branchAngle = ((i % 4) / 4) * Math.PI * 2

      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3 * radius
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3 * radius
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3 * radius

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX
      positions[i3 + 1] = randomY
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

      const mixedColor = colorInside.clone()
      mixedColor.lerp(colorOutside, radius / 5)

      colors[i3] = mixedColor.r
      colors[i3 + 1] = mixedColor.g
      colors[i3 + 2] = mixedColor.b
    }

    particles.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particles.current.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  }

  return (
    <points ref={particles}>
      <bufferGeometry />
      <pointsMaterial size={0.01} sizeAttenuation={true} depthWrite={true} vertexColors={true} blending={THREE.AdditiveBlending} />
    </points>
  )
}



function Nucleus({ size }) {
  const nucleusRef = useRef()
  const color = new THREE.Color()
  color.setHSL(Math.random(), 0.7, Math.random() * 0.2 + 0.05)

  return (
    <mesh ref={nucleusRef} position={[0, 0, 0]} scale={[size, size, size]} layers={THREE.BLOOM_SCENE}>
      <sphereBufferGeometry attach="geometry" args={[0.5, 32, 32, 0, 6.4, 0, 6.3]} />
      <meshBasicMaterial attach="material" color={'#fff'} />
    </mesh>
  )
}



function App() {
  const dof = useRef()

  return (
    <Canvas linear flat colorManagement={false} camera={{ position: [0, 2, 5] }}>
      <Suspense fallback={null}>
        <Galaxy dof={dof} />
        <Nucleus size={0.125} />
      </Suspense>

      <Globe />
    </Canvas>
  )
}


export default App