import Slider from "./Slider";

function Header() {
  return (
    <header className="flex h-14 items-center justify-between px-2 py-4">
      <h1 className="hidden text-xl sm:inline">Sorting Visualizer</h1>
      <div className="flex-1"></div>
      <Slider />
    </header>
  );
}
export default Header;
