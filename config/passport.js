/* DEPENDENCIES */
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const Traveler = require("../models/Traveler");

/* PASSPORT */
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://greentrail.onrender.com/auth/google/callback",
    },
    async function (token, tokenSecret, profile, done) {
      try {
        console.log(profile);
        const [traveler, created] = await Traveler.findOrCreate({
          where: {
            googleId: profile.id,
          },
          defaults: {
            first: profile.name.givenName,
            last: profile.name.familyName,
            email: profile.emails[0].value,
          },
        });
        return done(null, traveler);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

/* EXPORTS */
module.exports = passport;
