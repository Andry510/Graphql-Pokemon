import { Ability, DamageClass, Move, Pokemon, } from "./pokemon.js"
import query from '../schema/query.js'

const typeDefs = `#graphql    
    ${Ability}    
    ${DamageClass}
    ${Move}
    ${Pokemon}    
    ${query}
`

export default typeDefs