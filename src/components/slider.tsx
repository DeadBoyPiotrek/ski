type SliderProps = {
  changeSliderValue: (_value: number) => void;
};

export const Slider = ({ changeSliderValue }: SliderProps) => {
  return (
    <div className="flex justify-center p-10">
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        onChange={e => changeSliderValue(Number(e.target.value))}
      />
    </div>
  );
};
