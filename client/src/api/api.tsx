import axios, { AxiosResponse, AxiosError } from "axios";
export async function fetchPokemonStats(name: string): Promise<any> {
  try {
    // Make the API call using Axios
    const response: AxiosResponse = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/" + name
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

export async function fetchPokedexByGeneration(
  generation: number
): Promise<any> {
  try {
    // Make the API call using Axios
    const response: AxiosResponse = await axios.get(
      "https://pokeapi.co/api/v2/pokedex/" + generation
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
