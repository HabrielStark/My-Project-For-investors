'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Scene = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.002;
      sphereRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[2, 2, 5]} intensity={0.5} />
      <pointLight position={[-2, -2, -2]} intensity={0.5} color="#4B0082" />
      <mesh ref={sphereRef} scale={1.5}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          ref={materialRef}
          color="#4B0082"
          roughness={0.2}
          metalness={0.8}
          envMapIntensity={1}
        />
      </mesh>
      <mesh scale={2} position={[2, -1, -2]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#6B46C1"
          roughness={0.2}
          metalness={0.8}
          envMapIntensity={1}
        />
      </mesh>
    </>
  );
};

const ThreeCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Suspense fallback={
        <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-600/10 animate-pulse" />
      }>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
        >
          <Scene />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default ThreeCanvas; 