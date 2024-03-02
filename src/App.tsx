import Header from "./components/Header";
import Information from "./components/Information";
import Visualizer from "./components/Visualizer";

function App() {
  return (
    <div className="mx-auto flex h-screen max-w-3xl flex-col">
      <Header />
      <Information />
      <Visualizer />
    </div>
  );
}

export default App;
