import { FrameType } from "../algorithms/types";
import Bar from "./Bar";
import { Signal, signal } from "@preact/signals-react";

const numberOfBars = 100;

export const bars: Signal<{ height: number; frameType: FrameType }>[] =
  Array.from({ length: numberOfBars }, () =>
    signal({ height: Math.floor(Math.random() * 100), frameType: "default" })
  );

function Visualizer() {
  return (
    <div className="grow">
      <div className="flex h-full items-end justify-between">
        {bars.map((signal, index) => (
          <Bar key={index} signal={signal} />
        ))}
      </div>
    </div>
  );
}

export default Visualizer;
