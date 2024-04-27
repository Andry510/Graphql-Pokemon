const query = `#graphql
    type Query {
        Pokemons: [Pokemon!],
        Pokemon(name: String!): Pokemon
    }
`
export default query