import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import usePokemons from './hooks/usePokemons';

function Pokemons() {
  const { pokemons, fetchPokemons, fetchPokemonsPerPage } = usePokemons();

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <Button
        onClick={() => fetchPokemonsPerPage(pokemons?.next)}
      >
        Get More Pokemons!

      </Button>
      {pokemons?.results?.map((pokemon, idx) => (
        <p key={pokemon.url}>{`${idx + 1}: ${pokemon.name}`}</p>
      ))}
    </div>
  );
}

export default Pokemons;
