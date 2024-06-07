import { Pokemon } from "../Api/ApiInterface";
import { enrichPokedexWithStats, parsePokedexByGeneration } from "../Tools/ApiParser";
// import { enrichPokedexWithStats } from "../Tools/ApiParser";


export async function getPokedexWithStatsByGeneration(generation: number): Promise<Pokemon[]> {
    const pokedexEntries = await parsePokedexByGeneration();
    // console.log(pokedexEntries)
    const enrichedEntries = await enrichPokedexWithStats(pokedexEntries);
    // let pokedexComplete :  Pokemon[] = []
    return enrichedEntries;
  }