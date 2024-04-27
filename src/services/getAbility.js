import customApi from "../api/CustomApi.js"

const getAbility = async (abilityName) => {

    const url = `ability/${abilityName}`

    const { name, effect_entries } = await customApi({ source: url })
    const description = effect_entries.find(({ language }) => language.name === 'en').short_effect
    return ({ name, description })

}
export default getAbility