import customApi from "../api/CustomApi.js"
import getAbility from "./getAbility.js"
import getMove from "./getMove.js"

const getPokemons = async () => {

    return await customApi({ source: 'pokemon?limit=4' }).then(({ results }) => {

        return results.map(async ({ url }) => {
            const { name, height, weight, abilities, moves } = await customApi({ source: url, active: false })


            const abilitiesListPromises = abilities.map(async ({ ability }) => getAbility(ability.name));
            const abilitiesList = await Promise.all(abilitiesListPromises);

            const movesListPromises = moves.slice(0, 4).map(async ({ move }) => getMove(move.name));
            const movesList = await Promise.all(movesListPromises);

            const heightInfo = `${height}cm`
            const weightInfo = `${weight / 10}kg`;

            return {
                name,
                height: heightInfo,
                weight: weightInfo,
                abilities: abilitiesList,
                moves: movesList
            }
        })
    })
}

export default getPokemons