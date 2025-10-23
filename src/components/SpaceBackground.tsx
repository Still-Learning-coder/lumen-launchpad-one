import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface PlanetProps {
  position: [number, number, number];
  size: number;
  color: string;
  speed: number;
}

const Planet = ({ position, size, color, speed }: PlanetProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += speed;
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 2;
      meshRef.current.position.z = position[2] + Math.cos(state.clock.elapsedTime * speed * 0.5) * 2;
    }
  });

  return (
    <Sphere ref={meshRef} args={[size, 32, 32]} position={position}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
    </Sphere>
  );
};

const Scene = () => {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      {/* Animated stars */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Planets with different colors and speeds */}
      <Planet position={[-8, 2, -10]} size={0.8} color="#00ffff" speed={0.01} />
      <Planet position={[6, -3, -15]} size={1.2} color="#ff00ff" speed={0.008} />
      <Planet position={[-4, -2, -20]} size={0.6} color="#4a90e2" speed={0.012} />
      <Planet position={[10, 4, -25]} size={1} color="#9b59b6" speed={0.009} />
      <Planet position={[0, 5, -18]} size={0.7} color="#1abc9c" speed={0.011} />
    </>
  );
};

export const SpaceBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  );
};
