import Bar from "./Bar";
import { signal } from "@preact/signals-react";

const numberOfBars = 100;

export const heights = Array.from({ length: numberOfBars }, () =>
  signal(Math.floor(Math.random() * 100)),
);

function Visualizer() {
  return (
    <div className="grow">
      <div className="flex h-full items-end justify-between bg-red-700">
        {heights.map((heightSignal, index) => (
          <Bar key={index} height={heightSignal} />
        ))}
      </div>
    </div>
  );
}

export default Visualizer;
