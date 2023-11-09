export const fetchPokemons = async () => {
  const response = await fetch("./pokemons.json");
  return await response.json();
};
