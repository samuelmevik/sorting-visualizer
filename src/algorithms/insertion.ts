import { Algorithm, Frame } from "./types";

const insertionSort: Algorithm = {
  name: "Insertion",
  description:
    "Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.",
  fn: (arr: number[]) => {
    const frames: Frame[] = [];
    for (let i = 1; i < arr.length; i++) {
      let j = i - 1;
      const key = arr[i];
      frames.push({
        values: [i, i],
        type: "default",
      });
      while (j >= 0 && arr[j] > key) {
        frames.push({
          values: [j, j + 1],
          type: "comparing",
        });
        frames.push({
          values: [j, j + 1],
          type: "swapping",
        });
        arr[j + 1] = arr[j];
        j--;
      }

      arr[j + 1] = key;
      /*
      frames.push({
        values: [j + 1, j + 1],
        type: "sorted",
      });*/
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

export default insertionSort;
