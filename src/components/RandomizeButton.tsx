import { isSorting } from "./PlayButton";
import { bars } from "./Visualizer";

function RandomizeButton() {
  function randomize() {
    if (isSorting.value) {
      return;
    }
    bars.forEach((signal) => {
      signal.value = {
        height: Math.floor(Math.random() * 100),
        frameType: "default",
      };
    });
  }
  return (
    <button onClick={randomize} disabled={isSorting.value}>
      Randomize
    </button>
  );
}

export default RandomizeButton;
