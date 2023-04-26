const baseUrl = "https://pokeapi.co/api/v2/pokemon";
export const fetchPokemon = async ({
  page = 0,
  limit = 20,
}: {
  page: number;
  limit?: number;
}) => {
  try {
    const response: any = await fetch(
      `${baseUrl}?offset=${page}&limit=${limit}`
    );
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error?.message || "not found");
  }
};

export const fetchPokemonById = async (id: string = "") => {
  const response = await fetch(`${baseUrl}/${id}`);
  const data = await response.json();
  return data;
};
