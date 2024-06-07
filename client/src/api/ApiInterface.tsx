export interface PokemonStats {
  name?: string;
  hp?: string;
  attack?: string;
  defence?: string;
  specialAttack?: string;
  specialDefence?: string;
  speed?: string;
}

export interface Pokemon {
  name?: string;
  generation?: number;
  entry?: string;
  stats?: PokemonStats;
}

export interface Pokedex {
  pokemon?: Pokemon;
  stats: PokemonStats;
}
