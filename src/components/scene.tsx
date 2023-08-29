'use client';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Model } from './paperClip';

export const Scene = ({ sliderValue }: { sliderValue: number }) => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 5, 5]} />
      <OrbitControls />
      <ambientLight />
      <pointLight position={[1, 2, 1]} intensity={10} />
      <pointLight position={[-1, -2, 1]} intensity={10} />

      <Model sliderValue={sliderValue} />
    </Canvas>
  );
};
