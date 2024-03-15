import { signal } from "@preact/signals-react";
import { FaPlayCircle, FaStopCircle } from "react-icons/fa";
import { algorithm } from "./AlgorithmSelector";
import { bars } from "./Visualizer";
import { Frame } from "../algorithms/types";
import { speedValue } from "./Slider";

export const isSorting = signal(false);

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function PlayButton() {
  async function doFrame(frame: Frame) {
    const { values, type } = frame;
    const [index1, index2] = values;
    const value1 = bars[index1].value;
    const value2 = bars[index2].value;
    await delay(speedValue());
    if (type === "swapping") {
      bars[index1].value = { height: value2.height, frameType: type };
      bars[index2].value = { height: value1.height, frameType: type };
    } else {
      bars[index1].value = { height: value1.height, frameType: type };
      bars[index2].value = { height: value2.height, frameType: type };
    }
    await delay(speedValue());
    if (type === "sorted") {
      return;
    }
    bars[index1].value = {
      height: bars[index1].value.height,
      frameType: "default",
    };
    bars[index2].value = {
      height: bars[index2].value.height,
      frameType: "default",
    };
  }

  async function toggleSorting() {
    isSorting.value = !isSorting.value;
    if (!isSorting.value) {
      return;
    }
    const heights = bars.map((signal) => signal.value.height);
    const frames = algorithm.value.fn(heights);
    for (const frame of frames) {
      if (!isSorting.value) {
        break;
      }
      await doFrame(frame);
    }
    isSorting.value = false;
  }
  return (
    <button onClick={toggleSorting}>
      {isSorting.value ? (
        <FaStopCircle className="h-7 w-7 rounded-full bg-red-500" />
      ) : (
        <FaPlayCircle className="h-7 w-7 rounded-full bg-green-700" />
      )}
    </button>
  );
}

export default PlayButton;
