import axios, { AxiosResponse, AxiosError } from "axios";
import { PokemonStats, Pokemon } from "./ApiInterface";

export async function fetchPokemonStats(): Promise<any> {
  try {
    // Make the API call using Axios
    const response: AxiosResponse = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/bulbasaur"
    );

    // Extract the data from the response
    const results = {
      species: response.data.species,
      stats: response.data.stats,
    };
    return results;
  } catch (error) {
    // Handle errors
    if (axios.isAxiosError(error)) {
      // The request was made and the server responded with a status code
      const axiosError: AxiosError = error;
      if (axiosError.response) {
        console.error(
          "Server responded with error status:",
          axiosError.response.status
        );
        console.error("Error message:", axiosError.response.data);
      } else {
        console.error("No response received from server");
      }
    }
    throw error;
  }
}

export async function fetchPokemonStatsProcess(): Promise<PokemonStats> {
  const data: any = await fetchPokemonStats();
  let pokemonStats: PokemonStats = {};
  pokemonStats.name = data.species.name;
  data.stats.map((element: any) => {
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

export async function fetchPokedexDataByGeneration(): Promise<any> {
  try {
    // Make the API call using Axios
    const response: AxiosResponse = await axios.get(
      "https://pokeapi.co/api/v2/pokedex/3"
    );
    return response.data.pokemon_entries;
  } catch (error) {
    // Handle errors
    if (axios.isAxiosError(error)) {
      // The request was made and the server responded with a status code
      const axiosError: AxiosError = error;
      if (axiosError.response) {
        console.error(
          "Server responded with error status:",
          axiosError.response.status
        );
        console.error("Error message:", axiosError.response.data);
      } else {
        console.error("No response received from server");
      }
    }
    throw error;
  }
}

export async function fetchPokedexDataByGenerationProcess(): Promise<Pokemon[]> {
  const data: any = await fetchPokedexDataByGeneration();
  let pokedex: Pokemon[] = [];
  data.map((element: any) => {
    let pokemon: Pokemon = {};
    pokemon.entry = element.entry_number;
    pokemon.name = element.pokemon_species.name;
    pokemon.generation = 1;
    pokedex.push(pokemon)
  });
  return pokedex;
}
