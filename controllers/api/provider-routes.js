/* DEPENDENCIES */
const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Provider } = require("../../models");
const ProviderTag = require("../../models/ProviderTag");

/* ROUTES */
/* get listing of all providers */
router.get("/", async (req, res) => {
  try {
    const providerData = await Provider.findAll();
    res.status(200).json(providerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* POST create a Provider and ProviderTag */
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const providerData = await Provider.create(req.body);
    const tagBody = {
      provider_id: providerData.id,
      tag_id: req.body.tag_id
    };
    console.log(tagBody);
    const tagData = await ProviderTag.create(tagBody);
    res.status(201).json(providerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* EXPORTS */
module.exports = router;
