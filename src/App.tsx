import { signal } from "@preact/signals-react";

const counter = signal<number>(0);
function App() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col">
      <h1 className="bg-blue-200">Counter</h1>
      <button onClick={() => (counter.value += 1)}>Increment</button>
      <button onClick={() => (counter.value -= 1)}>Decrement</button>
      <p>{counter.value}</p>
    </div>
  );
}

export default App;
