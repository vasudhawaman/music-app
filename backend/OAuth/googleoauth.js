const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

const jwt =require('jsonwebtoken')
const JWT_SECRET = 'Krishkrishpathak@happend#';
const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth'
passport.use(new GoogleStrategy({
  clientID: "177767707429-s8nivhrgjbnnol2dl63jplvpu02sngej.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "http://localhost:8000/auth/google/callback",
  passReqToCallback: true
},
async(request, accessToken, refreshToken, profile, done) => {
  let user = await User.findOne({email:profile.emails[0].value});
  if (!user) {
    user = new User({
      username: profile.displayName,
      email: profile.emails[0].value
    });
    await user.save();
    console.log(user.id);
  }
  const authToken= jwt.sign(user.id,JWT_SECRET)

  return done(null,{authToken, profile});
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
