import customApi from "../api/CustomApi.js"

import getDamagesClass from "./getDamagesClass.js"

const getMove = async (moveName) => {

    const url = `move/${moveName}`

    const {name, accuracy, effect_chance, power, pp, damage_class }=  await customApi({ source: url })
    
    return {
        name,
        successRate: accuracy,
        movementProbability: effect_chance,
        movementPower: power,
        moveUses: pp,
        damageType: await getDamagesClass(damage_class.url)
    }
}

export default getMove