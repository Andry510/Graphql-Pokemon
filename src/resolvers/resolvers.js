import getPokemons from "../services/getPokemons.js"
import getPokemon from "../services/getPokemon.js"

const resolvers = {
    Query: {
        Pokemons: () => getPokemons(),
        Pokemon: (root, args) => {
            const { name } = args
            return getPokemon(name)
        }
    }
}

export default resolvers