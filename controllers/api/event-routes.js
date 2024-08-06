const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Event } = require("../../models");

// ROUTES
// api/events
router.get("/", async (req, res) => {
  try {
    const eventData = await Event.findAll();
    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// api/events/:id
router.get("/:id", async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id, {});
    if (!eventData) {
      res.status(404).json({ message: "No events found!" });
      return;
    }
    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
