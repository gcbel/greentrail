/* DEPENDECIES */
const router = require("express").Router();
const {
  Community,
  Site,
  Country,
  Province,
  Town,
  Provider,
  Event,
  EventSeries,
  Tag,
  ProviderTag,
} = require("../models");

/* ROUTES */
/* Get request for homepage */
router.get("/", async (req, res) => {
  try {
    // Render
    res.render("home", {
      loggedIn: req.session.loggedIn,
      darkText: false,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* Get request for add page */
router.get("/add", async (req, res) => {
  try {
    // Render
    res.render("add", {
      loggedIn: req.session.loggedIn,
      darkText: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* Get request for location page, gets all locations */
router.get("/locations", async (req, res) => {
  try {
    dbLocationData = await Country.findAll({
      include: [
        {
          model: Province,
          attributes: ["province_name", "country_id"],
          include: [
            {
              model: Town,
              attributes: ["town_name", "province_id"],
            },
          ],
        },
      ],
    });

    const countries = dbLocationData.map((country) =>
      country.get({ plain: true })
    );
    // Render
    res.render("locations", {
      countries,
      loggedIn: req.session.loggedIn,
      darkText: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* Get request for community page by name */
router.get("/community/:name", async (req, res) => {
  try {
    // Get community info
    const communityData = await Community.findOne({
      where: { community_name: req.params.name },
      include: [
        {
          model: Provider,
          attributes: [
            "provider_name",
            "community_id",
            "site_id",
            "service",
            "description",
          ],
          include: [
            {
              model: Site,
              attributes: [
                "site_name",
                "category",
                "description",
                "town_id",
                "street_address",
                "map_link",
              ],
            },
          ],
        },
        {
          model: Event,
          attributes: [
            "event_name",
            "community_id",
            "site_id",
            "date",
            "category",
            "description",
          ],
          include: [
            {
              model: EventSeries,
              attributes: [
                "event_series_name",
                "date",
                "day_of_week",
                "time",
                "category",
                "description",
              ],
            },
          ],
        },
      ],
    });

    // Ensure we have found a community
    if (!communityData) {
      res.status(404).json({ message: "No such town exists as community" });
    }
    const community = communityData.get({ plain: true });
    console.log(community);
    console.dir(community, { depth: null });
    // Render page
    res.render("community", {
      community,
      loggedIn: req.session.loggedIn,
      darkText: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/* Get request for login page */
router.get("/login", async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect("/locations");
      return;
    }
    // Render
    res.render("login", {
      loggedIn: req.session.loggedIn,
      darkText: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* Get request: if not found above, route to 404 page */
router.get("*", async (req, res) => {
  try {
    // Render
    res.render("404", {
      loggedIn: req.session.loggedIn,
      darkText: false,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* EXPORTS */
module.exports = router;
