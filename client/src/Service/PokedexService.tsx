import { Pokemon } from "../Api/ApiInterface";
import {
  enrichPokedexWithStats,
  parsePokedexByGeneration,
} from "../Tools/ApiParser";

export async function getPokedexWithStatsByGeneration(
  generation: number
): Promise<Pokemon[]> {
  const pokedexEntries = await parsePokedexByGeneration(generation);
  const enrichedEntries = await enrichPokedexWithStats(pokedexEntries);
  return enrichedEntries;
}
