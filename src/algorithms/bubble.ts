import { Algorithm, Frame } from "./types";

const bubbleSort: Algorithm = {
  name: "Bubble",
  description:
    "Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
  fn: (arr: number[]) => {
    const frames: Frame[] = [];
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        frames.push({
          values: [j, j + 1],
          type: "comparing",
        });
        if (arr[j] > arr[j + 1]) {
          frames.push({
            values: [j, j + 1],
            type: "swapping",
          });
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
      frames.push({
        values: [n - i - 1, n - i - 1],
        type: "sorted",
      });
    }
    return frames;
  },
};

export default bubbleSort;
