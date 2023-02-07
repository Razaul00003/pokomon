import { GraphQLClient, gql } from "graphql-request";

const endPoint = "https://graphql-pokeapi.graphcdn.app";
const gqlClient = new GraphQLClient(endPoint);

//get Pokemons
export const getPokemons = async () => {
  const pokemonsQueries = gql`
    query pokemons($limit: Int, $offset: Int) {
      types {
        results {
          name
          url
          id
        }
      }
      pokemons(limit: $limit, offset: $offset) {
        results {
          id
          name
          image
        }
      }
    }
  `;

  const pokesVariables = {
    "limit": 10,
    "offset": 1,
  };

  return await gqlClient.request(pokemonsQueries, {
    variables: pokesVariables,
  });
};

//get detail of specific pokemon by id
