import { signal } from "@preact/signals-react";

const speed = signal<number>(1);

function Slider() {
  return (
    <div className="flex gap-2">
      <p>Slow</p>
      <input
        type="range"
        name="speed"
        id="speed"
        min={1}
        max={100}
        value={speed.value}
        onChange={(e) => {
          e.preventDefault();
          speed.value = parseFloat(e.target.value);
        }}
        className="rounded-lg"
      />
      <p>Fast</p>
    </div>
  );
}

export default Slider;
