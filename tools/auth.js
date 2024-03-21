import passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

const secret = 'your_jwt_secret'; // Todo: Change this to an environment variable

export const init = () => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
    secretOrKey: `${secret}`
  }

  passport.use(new Strategy(options, (decoded, done) => {
    return done(null, decoded)
  }))
}

export const protectWithJwt = (req, res, next) => {
  if (req.path === '/auth/login' || req.path === '/') {
    return next()
  }

  return passport.authenticate('jwt', { session: false })(req, res, next)
}
