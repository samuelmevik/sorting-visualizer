import { algorithm } from "./AlgorithmSelector";

function Information() {
  return (
    <div>
      <h1>{algorithm.value.name}</h1>
      <p>{algorithm.value.description}</p>
    </div>
  );
}

export default Information;
