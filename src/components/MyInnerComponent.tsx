import { usePokemons } from "../store/pokemons";

export default function MyInnerComponent() {
  const pokemons = usePokemons((state) => state.pokemons);

  return <div>first pokemon: {pokemons[0]?.name}</div>;
}
