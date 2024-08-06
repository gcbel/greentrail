/* DEPENDENCIES */
const router = require("express").Router();
const passport = require("../config/passport");

/* ROUTES */
/* Route to start OAuth2 authentication */
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login", "email"],
  })
);

/* Callback route for OAuth2 authentication */
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication
    console.log(req.user);
    req.session.save(() => {
      req.session.loggedIn = true;
      res.redirect("/locations");
    });
  }
);

/* EXPORTS */
module.exports = router;
