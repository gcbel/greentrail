/* DEPENDENCIES */
const router = require("express").Router();

/* ROUTES */
const authRoutes = require("./auth-routes.js");
const homeRoutes = require("./home-routes.js");
const apiRoutes = require("./api");

router.use("/auth", authRoutes);
router.use("/api", apiRoutes);
router.use("/", homeRoutes);

/* EXPORTS */
module.exports = router;
