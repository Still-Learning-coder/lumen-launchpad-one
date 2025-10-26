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
      {/* Enhanced lighting for cosmic atmosphere */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#00d4ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#9d00ff" />
      
      {/* Layered stars with different depths for parallax effect */}
      <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1} />
      <Stars radius={80} depth={40} count={3000} factor={3} saturation={0.2} fade speed={0.5} />
      
      {/* Main planets with vibrant cosmic colors */}
      <Planet position={[-8, 2, -10]} size={0.8} color="#00ffff" speed={0.01} />
      <Planet position={[6, -3, -15]} size={1.2} color="#ff00ff" speed={0.008} />
      <Planet position={[-4, -2, -20]} size={0.6} color="#4a90e2" speed={0.012} />
      <Planet position={[10, 4, -25]} size={1} color="#9d00ff" speed={0.009} />
      <Planet position={[0, 5, -18]} size={0.7} color="#1abc9c" speed={0.011} />
      
      {/* Additional planets for depth */}
      <Planet position={[15, -5, -30]} size={0.9} color="#ff6b9d" speed={0.007} />
      <Planet position={[-12, 6, -22]} size={0.5} color="#ffd700" speed={0.013} />
      <Planet position={[3, -8, -28]} size={1.1} color="#00d4ff" speed={0.006} />
      
      {/* Smaller asteroids for extra detail */}
      <Planet position={[-15, 0, -18]} size={0.3} color="#888888" speed={0.015} />
      <Planet position={[12, -2, -16]} size={0.25} color="#aaaaaa" speed={0.018} />
      <Planet position={[-6, 8, -24]} size={0.35} color="#999999" speed={0.014} />
    </>
  );
};

export const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  );
};
