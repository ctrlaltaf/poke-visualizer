import { Pokemon, PokemonStats } from "../Api/ApiInterface";
import { fetchPokedexByGeneration, fetchPokemonStats } from "../Api/api";

export async function parsePokedexByGeneration(): Promise<Pokemon[]> {
  const data: any = await fetchPokedexByGeneration();
  const results = data.pokemon_entries;
  let pokedex: Pokemon[] = [];
  results.map((element: any) => {
    let pokemon: Pokemon = {};
    pokemon.entry = element.entry_number;
    pokemon.name = element.pokemon_species.name;
    pokemon.generation = 1;
    pokedex.push(pokemon);
  });
  return pokedex;
}

export async function parsePokemonStats(): Promise<PokemonStats> {
  const data: any = await fetchPokemonStats();
  const results = {
    species: data.species,
    stats: data.stats,
  };
  let pokemonStats: PokemonStats = {};
  pokemonStats.name = results.species.name;
  results.stats.map((element: any) => {
    if (element.stat.name == "hp") {
      pokemonStats.hp = element.base_stat;
    } else if (element.stat.name == "attack") {
      pokemonStats.attack = element.base_stat;
    } else if (element.stat.name == "defence") {
      pokemonStats.defence = element.base_stat;
    } else if (element.stat.name == "special-attack") {
      pokemonStats.specialAttack = element.base_stat;
    } else if (element.stat.name == "special-defence") {
      pokemonStats.specialDefence = element.base_stat;
    } else if (element.stat.name == "speed") {
      pokemonStats.speed = element.base_stat;
    }
  });

  return pokemonStats;
}
