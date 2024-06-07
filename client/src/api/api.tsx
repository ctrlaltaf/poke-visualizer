import axios, { AxiosResponse, AxiosError } from "axios";
import { PokemonStats, Pokemon } from "./ApiInterface";
export async function fetchPokemonStats(): Promise<any> {
  try {
    // Make the API call using Axios
    const response: AxiosResponse = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/bulbasaur"
    );

    // Extract the data from the response
    return response.data;
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

export async function fetchPokedexByGeneration(): Promise<any> {
  try {
    // Make the API call using Axios
    const response: AxiosResponse = await axios.get(
      "https://pokeapi.co/api/v2/pokedex/3"
    );
    return response.data;
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
