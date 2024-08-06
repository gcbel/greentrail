/* DEPENDENCIES */
const router = require("express").Router();
const { Traveler } = require("../../models");

/* ROUTES */
/* Post route to /api/users, signs up a new user */
router.post("/", async (req, res) => {
  try {
    const user = await Traveler.create({
      first: req.body.first,
      last: req.body.last,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json({ user: user });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/* Post route to /api/users/login, signs an existing user in */
router.post("/login", async (req, res) => {
  try {
    const user = await Traveler.findOne({
      where: {
        email: req.body.email,
      },
    });

    // If email is valid, check the password
    let validPassword = false;
    if (user) {
      validPassword = await user.checkPassword(req.body.password);
    }

    // If email or password were invalid, return message
    if (!user || !validPassword) {
      res.status(400).json({ message: "Incorrect email or password." });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json({ user: user });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/* Post route to /api/users/logout, signs an existing user out */
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(200).end();
    });
  } else {
    res.status(400).end();
  }
});

/* EXPORTS */
module.exports = router;
