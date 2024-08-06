/* DEPENDENCIES */
const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Country, Province, Town, Site, Community } = require("../../models");

/* ROUTES */
/* Route to get listing of all communities */
router.get("/", async (req, res) => {
  try {
    const communityData = await Community.findAll();
    res.status(200).json(communityData);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* Route to get community by name, WIP */
router.get("/community/:name", async (req, res) => {
  try {
    const communityData = await Community.findOne({
      where: { community_name: req.params.name },
      include: [{ model: Site, model: Town }],
    });
    if (!communityData) {
      res.status(404).json({ message: "No such town exists as community" });
    }
    res.status(200).json(communityData);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* EXPORTS */
module.exports = router;
