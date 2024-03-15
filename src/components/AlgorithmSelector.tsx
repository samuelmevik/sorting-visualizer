import { signal } from "@preact/signals-react";
import registry from "../algorithms/registry";
import { Algorithm } from "../algorithms/types";
import { isSorting } from "./PlayButton";

export const algorithm = signal<Algorithm>(registry[0]);
function AlgorithmSelector() {
  return (
    <select
      name="algorithm"
      id="algorithm"
      disabled={isSorting.value}
      onChange={(e) => {
        e.preventDefault();
        const selectedAlgorithm = registry.find(
          (algo) => algo.name === e.target.value
        );
        if (!selectedAlgorithm) {
          console.error("Algorithm not found");
          return;
        }
        algorithm.value = selectedAlgorithm;
      }}
    >
      {registry.map((algo, idx) => (
        <option key={idx} value={algo.name}>
          {algo.name}
        </option>
      ))}
    </select>
  );
}

export default AlgorithmSelector;
