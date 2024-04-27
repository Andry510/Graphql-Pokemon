import passport from "passport"
import generateTokens from "../utils/gerenateTokens.js"

const passportAut = (strategyName) => (req, res, next) => {
    passport.authenticate(strategyName, { session: false }, async (err, user, info) => {

        if (err) return next(err)
        if (info) return next(info)
                
        const token = await generateTokens(user.id)

        if (strategyName === 'login') return res.status(200).json({ user, token })

        next()

    })(req, res, next)

}
export default passportAut