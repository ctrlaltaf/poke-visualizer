import React, { useEffect, useState } from "react";
import { fetchPokemonStatsProcess } from "../../api/api";
import { PokemonStats } from "../../api/ApiInterface";

const SearchPage: React.FC = () => {
  const [pokemonStats, setPokemonStats] = useState<PokemonStats | null>(null);

  useEffect(() => {
    const fetchPokemonStats = async () => {
      try {
        // Fetch Pokemon stats
        const stats = await fetchPokemonStatsProcess();

        setPokemonStats(stats);
      } catch (error) {
        // Handle errors
      }
    };

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
    </>
  );
};

export default SearchPage;
