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

export async function parsePokemonStats(name: string): Promise<PokemonStats> {
  const data: any = await fetchPokemonStats(name);
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

export async function enrichPokedexWithStats(
  pokedexEntries: Pokemon[]
): Promise<Pokemon[]> {
  const result = pokedexEntries.map(async (entries: any) => {
    // console.log(entries.name)
    const stats = await parsePokemonStats(entries.name);
    // console.log(entries.name, stats)
    return { ...entries, stats };
  });
//   console.log(Promise.all(result))
//   const pokedex: Pokemon[] = [];
  return Promise.all(result);
}
