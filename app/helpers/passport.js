const passport = require("passport");
const passportJwt = require("passport-jwt")
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
const db = require("../model/sequelize");
const User = db.userModel;

passport.use(
    new StrategyJwt({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWR_SECRET,
    },
        (jwtPayload, done) => {
            return User.findOne({ where: { id: jwtPayload.id } }).then((user) => {
                return done(null, user);
            }).catch((err) => {
                return done(err);
            })
        }
    )
);