const router = require("express").Router();
const sequelize = require("../../config/connection");
const { EventSeries } = require("../../models");

// ROUTES
// api/eventSeries
router.get("/", async (req, res) => {
  try {
    const eventSeriesData = await EventSeries.findAll();
    res.status(200).json(eventSeriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// api/eventSeries/:id
router.get("/:id", async (req, res) => {
  try {
    const eventSeriesData = await EventSeries.findByPk(req.params.id, {});
    if (!eventSeriesData) {
      res.status(404).json({ message: "No Event Series information found!" });
      return;
    }
    res.status(200).json(eventSeriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
