import { ExtractJwt, Strategy } from 'passport-jwt';

const secret = 'your_jwt_secret'; // Todo: Change this to an environment variable

const auth = (passport) => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: `${secret}`
  }

  passport.use(new Strategy(options, (decoded, done) => {
    return done(null, decoded)
  }))
}

export default auth