import passport from "passport";
import { Strategy as localStrategy } from "passport-local"

import profile from "../json/profile.js";

passport.use('login', new localStrategy({ usernameField: "email", passwordField: "password" },
    async (email, password, done) => {

        const emailMatch = email === profile.email
        const passwordMatch = password === profile.password

        if (!emailMatch || !passwordMatch) {
            const error = new Error('Incorrect email or passwords')
            return done(error, false,);
        }

        done(null, profile);
    }))