import axios from "axios";
import { POKE_API } from "../config/config.js";

const customApi = async ({ source, active = true }) => {
    
    const url = `${POKE_API}${source}`

    try {
        const { data } = await axios.get(active ? url : source)
        return data

    } catch (error) {
        throw error
    }
}

export default customApi