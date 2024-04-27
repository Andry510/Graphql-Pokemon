import jwt from "jsonwebtoken";
import { SECRET_TOKEN } from "../config/config.js";

const generateTokens = (id) => {
    try {                
        return jwt.sign({ id }, SECRET_TOKEN, {expiresIn: '1hr'});
    } catch (error) {

        throw error
    }
}


export default generateTokens