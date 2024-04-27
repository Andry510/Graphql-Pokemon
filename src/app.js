import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import passport from "passport";
import express from "express"
import http from "http"
import cors from "cors"

//Esquemas y soluciones
import typeDefs from "./schema/typeDefs.js";
import resolvers from "./resolvers/resolvers.js";

//Ruta
import routers from "./routers/router.routes.js";

//Estrategia
import './utils/localStrategy.js'
import passportToken from "./middlewares/passportToken.js";

import { PORT } from "./config/config.js";


export const app = express()
export const httpServer = http.createServer(app)

export const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    formatError: (error) => error
})

await server.start()

app.set('port', PORT)

app.use(passport.initialize())
app.use(cors())
app.use(express.json())
app.use('/', routers)
app.use('/graphql', expressMiddleware(server, {
    context: passportToken
}))


