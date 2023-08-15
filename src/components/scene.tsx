'use client';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Model } from './paperClip';

export const Scene = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <pointLight position={[1, 2, 1]} intensity={10} />
      <pointLight position={[-1, -2, 1]} intensity={10} />

      <Model />
    </Canvas>
  );
};
