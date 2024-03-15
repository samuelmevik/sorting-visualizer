import { signal } from "@preact/signals-react";

const min = 1;
const max = 100;

const speed = signal<number>(min);

export function speedValue() {
  return (min / speed.value) * max * 10;
}

function Slider() {
  return (
    <div className="flex gap-2">
      <p>Slow</p>
      <input
        type="range"
        name="speed"
        id="speed"
        min={min}
        max={max}
        value={speed.value}
        onChange={(e) => {
          e.preventDefault();
          speed.value = parseFloat(e.target.value);
        }}
        className="w-20 rounded-lg"
      />
      <p>Fast</p>
    </div>
  );
}

export default Slider;
