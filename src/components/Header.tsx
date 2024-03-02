import AlgorithmSelector from "./AlgorithmSelector";
import Slider from "./Slider";

function Header() {
  return (
    <header className="flex h-14 items-center justify-between gap-5 px-2 py-4">
      <h1 className="hidden text-xl sm:inline">Sorting Visualizer</h1>
      <div className="flex-1"></div>
      <Slider />
      <AlgorithmSelector />
    </header>
  );
}
export default Header;
