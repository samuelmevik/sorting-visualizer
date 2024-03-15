import { Algorithm, Frame } from "./types";

const selectionSort: Algorithm = {
  name: "Selection",
  description:
    "Selection sort is a simple in-place comparison-based sorting algorithm.",
  fn: (arr: number[]) => {
    const frames: Frame[] = [];
    for (let i = 0; i < arr.length - 1; i++) {
      let mindx = i;
      for (let j = i + 1; j < arr.length; j++) {
        frames.push({
          values: [j, mindx],
          type: "comparing",
        });
        if (arr[j] < arr[mindx]) {
          mindx = j;
        }
      }
      frames.push({
        values: [i, mindx],
        type: "swapping",
      });
      [arr[i], arr[mindx]] = [arr[mindx], arr[i]];
    }
    for (let i = 0; i < arr.length; i++) {
      frames.push({
        values: [i, i],
        type: "sorted",
      });
    }
    return frames;
  },
};

export default selectionSort;
