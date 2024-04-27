import { config } from "dotenv"

config()

export const POKE_API = process.env.POKE_API
export const PORT = process.env.PORT
export const SECRET_TOKEN = process.env.SECRET_TOKEN
