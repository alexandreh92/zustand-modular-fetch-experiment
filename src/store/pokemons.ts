import { create } from "zustand";
import { fetchPokemons } from "../api";

export const getPokemons = async () => {
  const pokemons = await fetchPokemons();
  usePokemons.setState((state) => ({ ...state, pokemons }));
};

export const usePokemons = create((set) => ({
  pokemons: [],
  getPokemons,
}));

getPokemons();
