const { EventSeries } = require("../models/Event");

const eventSeriesData = [
  {
    event_series_name: "Yoga Class",
    event_id: 1,
    community_id: 1,
    site_id: null,
    date: null,
    day_of_week: "Mondays",
    time: "09:00",
    category: "event series",
    description: "Weekly yoga classes offered on Mondays at 9:00am.",
  },
  {
    event_series_name: "Learn_2_Code",
    event_id: 1,
    community_id: 1,
    site_id: null,
    date: null,
    day_of_week: "Sundays",
    time: "12:00",
    category: "event series",
    description:
      "Join us every Sunday for Learn_2_Code, a free online event series for those looking to break into tech.",
  },
];

const seedEventSeries = () => EventSeries.bulkCreate(eventSeriesData);

module.exports = seedEventSeries;
