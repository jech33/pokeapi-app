import { useState } from 'react';
import Pokeapi from '../../../services/Pokeapi';

const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  const { getAllPokemons } = Pokeapi;

  const fetchPokemons = async () => {
    const allPokemons = await getAllPokemons();
    setPokemons(() => allPokemons);
  };

  const fetchPokemonsPerPage = async (nextpage) => {
    const allPokemons = await getAllPokemons(nextpage);
    setPokemons((prevpokemons) => {
      const prevResults = prevpokemons.results;
      const newResults = allPokemons.results;
      if (!prevResults.find((element) => element.url === newResults[0].url)) {
        prevResults.push(...newResults);
      }
      return {
        ...prevpokemons,
        next: allPokemons.next,
      };
    });
  };

  return {
    pokemons,
    fetchPokemons,
    fetchPokemonsPerPage,
  };
};

export default usePokemons;
