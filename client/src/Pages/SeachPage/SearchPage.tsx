import React, { useEffect, useState } from "react";
import { Pokemon } from "../../Api/ApiInterface";
import { getPokedexWithStatsByGeneration } from "../../Service/PokedexService";

const SearchPage: React.FC = () => {
  const [pokedex, setPokedex] = useState<Pokemon[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokedexWithStatsByGeneration(3);
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
