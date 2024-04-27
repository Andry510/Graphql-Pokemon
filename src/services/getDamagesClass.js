import customApi from "../api/CustomApi.js"

const getDamagesClass = async (url) => {

    const { name, descriptions } = await customApi({ source: url, active: false })
    const description = descriptions.find(({ language }) => language.name === 'en').description
    return { name, description }
}

export default getDamagesClass