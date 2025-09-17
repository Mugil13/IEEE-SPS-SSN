'use client';

import { useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

function RotatingTexturedSphere() {
    const meshRef = useRef<THREE.Mesh>(null);
  // Load texture from public folder
  const texture = useLoader(THREE.TextureLoader, "/SSN_SPS_LOGO.jpg");

  // Scale and wrap texture for seamless repeat
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);

  useFrame(() => {
    if (meshRef.current) {
      // Rotate sphere slowly around y-axis
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.75, 64, 64]} />
      <meshStandardMaterial map={texture} transparent={true} />
    </mesh>
  );
}

export default function SphereLogo3D() {
  return (
    <Canvas camera={{ position: [0, 0, 3.6] }} style={{ background: 'transparent' }}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 5, 5]} intensity={1.24} />
      <RotatingTexturedSphere />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.18} />
    </Canvas>
  );
}
