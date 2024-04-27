import jwt from "jsonwebtoken"
import { GraphQLError } from 'graphql' ; 
import { SECRET_TOKEN } from "../config/config.js"
import profile from "../json/profile.js"

const passportToken = ({ req }) => {
    const token = req.headers.token
    const { id } = jwt.verify(token, SECRET_TOKEN)    
    console.log(id)
    if(profile.id === id) {
        console.log('entro')
        throw new GraphQLError('Your user is not identified.')        
    }
}

export default passportToken