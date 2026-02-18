// pokedex.ts
// Programa CLI que busca dados de um Pokémon na PokéAPI

// Interface que representa APENAS os dados que vamos usar da API
interface PokemonAPIResponse {
  name: string;
  height: number; // vem em decímetros
  weight: number; // vem em hectogramas
  types: {
    type: {
      name: string;
    };
  }[];
}

// Função principal usando async/await
async function getPokemon() {
  // Pega o argumento digitado no terminal
  const pokemonArg = process.argv[2];

  // Se o usuário não digitar nada
  if (!pokemonArg) {
    console.log("Informe o nome ou ID do Pokémon.");
    return;
  }

  try {
    // Faz a requisição
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonArg.toLowerCase()}`
    );

    // Se não encontrou o Pokémon
    if (!response.ok) {
      console.log("Pokémon não encontrado!");
      return;
    }

    const data: PokemonAPIResponse = await response.json();

    // Capitaliza o nome
    const name =
      data.name.charAt(0).toUpperCase() + data.name.slice(1);

    // Converte medidas
    const height = data.height / 10; // metros
    const weight = data.weight / 10; // kg

    // Pega os tipos
    const types = data.types
      .map(t => t.type.name)
      .join(" / ");

    // Exibe no formato pedido
    console.log(`${name} — ${height} m — ${weight} kg — ${types}`);

  }catch (error) {
  if (error instanceof Error) {
    console.log("Erro:", error.message);
  } else {
    console.log("Erro desconhecido.");
  }
}

}

// Executa a função
getPokemon();
