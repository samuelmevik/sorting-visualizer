import { Algorithm } from "./types";
import bubbleSort from "./bubble";
import insertionSort from "./insertion";
import selectionSort from "./selection";

const registry = new Array<Algorithm>();

registry.push(bubbleSort);
registry.push(insertionSort);
registry.push(selectionSort);

export default registry;
