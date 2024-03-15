import { Signal } from "@preact/signals-react";
import { FrameType } from "../algorithms/types";

function Bar({
  signal,
}: {
  signal: Signal<{ height: number; frameType: FrameType }>;
}) {
  const color = () => {
    switch (signal.value.frameType) {
      case "comparing":
        return "bg-green-500";
      case "swapping":
        return "bg-red-500";
      case "sorted":
        return "bg-yellow-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div
      className={`w-1 rounded-t-full transition-colors duration-[10ms] ${color()}`}
      style={{ height: `${signal.value.height}%` }}
    ></div>
  );
}

export default Bar;
