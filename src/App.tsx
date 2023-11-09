import MyInnerComponent from "./components/MyInnerComponent";
import { usePokemons } from "./store/pokemons";

function App() {
  const pokemons = usePokemons((state) => state.pokemons);

  return (
    <>
      {JSON.stringify(pokemons, null, 2)}

      <MyInnerComponent />
    </>
  );
}

export default App;
