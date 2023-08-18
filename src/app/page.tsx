import { Scene } from '@/components/scene';
import { useState } from 'react';

export default function Home() {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <main className="h-screen">
      <div className="border h-full">
        <Scene sliderValue={sliderValue} />

        <div className="flex justify-center">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={sliderValue}
            onChange={e => setSliderValue(Number(e.target.value))}
          />
        </div>
      </div>
    </main>
  );
}
