'use client';
import { Slider } from '@/components/slider';
import { Scene } from '@/components/scene';
import { useState } from 'react';

export default function Home() {
  const [sliderValue, setSliderValue] = useState(1);

  const changeSliderValue = (value: number) => {
    setSliderValue(value);
  };

  return (
    <main className="h-screen">
      <div className="border h-3/4 ">
        <Scene sliderValue={sliderValue} />
      </div>
      <Slider changeSliderValue={changeSliderValue} />
    </main>
  );
}
