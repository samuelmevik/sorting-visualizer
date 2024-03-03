import { Signal } from "@preact/signals-react";

function Bar({ height }: { height: Signal<number> }) {
  return (
    <div
      className="w-1 rounded-t-full bg-blue-500 transition-colors duration-[10ms]"
      style={{ height: `${height.value}%` }}
    ></div>
  );
}

export default Bar;
