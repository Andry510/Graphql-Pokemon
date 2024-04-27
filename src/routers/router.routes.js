import { Router } from "express";
import passportAut from "../middlewares/passportAuth.js";

const routers = Router()

routers.post('/login', passportAut('login'))


export default routers
