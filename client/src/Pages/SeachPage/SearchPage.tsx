import React, { useEffect, useState } from "react";
import {
  enrichPokedexWithStats,
  parsePokedexByGeneration,
  parsePokemonStats,
} from "../../Tools/ApiParser";
import { PokemonStats, Pokemon } from "../../Api/ApiInterface";
import { getPokedexWithStatsByGeneration } from "../../Service/PokedexService";

const SearchPage: React.FC = () => {
  const [pokemonStats, setPokemonStats] = useState<PokemonStats | null>(null);
  const [pokedex, setPokedex] = useState<Pokemon[] | null>(null);

  // useEffect(() => {
  //   const fetchPokemonStats = async () => {
  //     try {
  //       // Fetch Pokemon stats
  //       const stats = await parsePokemonStats();

  //       setPokemonStats(stats);
  //     } catch (error) {
  //       // Handle errors
  //     }
  //   };

  //   const fetchPokedexData = async () => {
  //     try {
  //       // Fetch Pokemon stats
  //       const pokedex = await parsePokedexByGeneration();
  //       setPokedex(pokedex);
  //     } catch (error) {
  //       // Handle errors
  //     }
  //   };

  //   fetchPokedexData();
  //   fetchPokemonStats();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokedexWithStatsByGeneration(1);
      setPokedex(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Search Page</h1>
      {pokedex && (
        <div>
          {pokedex.map((pokemon: any) => (
            <ul>
              <li key={pokemon.entry}>{pokemon.name}</li>
              <ul key={"stats"}>
                <li key={"hp"}>HP: {pokemon.stats.hp}</li>
                <li key={"attack"}>Attack: {pokemon.stats.attack}</li>
                <li key={"defence"}>Defence: {pokemon.stats.defence}</li>
                <li key={"sp.at"}>
                  Special Attack: {pokemon.stats.specialAttack}
                </li>
                <li key={"sp.df"}>
                  Special Defence: {pokemon.stats.specialDefence}
                </li>
                <li key={"speed"}>Speed: {pokemon.stats.speed}</li>
              </ul>
            </ul>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchPage;
