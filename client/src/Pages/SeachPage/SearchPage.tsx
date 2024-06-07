import React, { useEffect, useState } from "react";
import { parsePokedexByGeneration, parsePokemonStats } from "../../Tools/ApiParser";
import { PokemonStats, Pokemon } from "../../Api/ApiInterface";

const SearchPage: React.FC = () => {
  const [pokemonStats, setPokemonStats] = useState<PokemonStats | null>(null);
  const [pokedex, setPokedex] = useState<Pokemon[] | null>(null);

  useEffect(() => {
    const fetchPokemonStats = async () => {
      try {
        // Fetch Pokemon stats
        const stats = await parsePokemonStats();

        setPokemonStats(stats);
      } catch (error) {
        // Handle errors
      }
    };

    const fetchPokedexData = async () => {
      try {
        // Fetch Pokemon stats
        const pokedex = await parsePokedexByGeneration();
        setPokedex(pokedex);
      } catch (error) {
        // Handle errors
      }
    };

    fetchPokedexData();
    fetchPokemonStats();
  }, []);

  return (
    <>
      <h1>Search Page</h1>
      {pokemonStats && (
        <ul>
          <li>Name: {pokemonStats.name}</li>
          <li>HP: {pokemonStats.hp}</li>
          <li>Attack: {pokemonStats.attack}</li>
          <li>Defence: {pokemonStats.defence}</li>
          <li>Special Attack: {pokemonStats.specialAttack}</li>
          <li>Special Defence: {pokemonStats.specialDefence}</li>
          <li>Speed: {pokemonStats.speed}</li>
        </ul>
      )}
      {pokedex && (
        <ul>
          {pokedex.map((pokemon: any) => (
            <li key={pokemon.entry}>{pokemon.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchPage;
