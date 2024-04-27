//habilidad
export const Ability = `#graphql
    type Ability {
        name: String!
        description: String!
    }   
`
export const DamageClass = `#graphql
    type DamageClass {
        name: String
        description: String
    }
`

export const Move = `#graphql 
    type Move { 
        name: String!
        successRate: Int!
        movementProbability: Int!
        movementPower: Int
        moveUses: Int!
        damageType: DamageClass!
    }
`
export const Species = `#graphql
    type Species {
        name: String!
    }
`

//Pokemon
export const Pokemon = `#graphql
    type Pokemon {
        name: String!
        height: String!
        weight: String!
        abilities: [Ability!]       
        moves: [Move!]         
    }
`