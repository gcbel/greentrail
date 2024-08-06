const { Event } = require("../models/Event");

const eventData = [
  {
    event_name: "Dia de Los Muertos",
    date: "2024-11-01",
    community_id: 1,
    site_id: 14,
    category: "event",
    description:
      "Día de los Muertos acknowledges the symbiotic relationship between life and death. El día de Los Muertos is celebrated on November 1st and November 2nd, in which the spirits of the dead are believed to return home and spend time with their relatives on these two days. To welcome them, the family build altars in their honor. These altars have a series of different components that vary from one culture to another that mostly include yellow marigolds, candles, photos of the deceased ones, papel picado or cut tissue-paper designs, as well as food and beverages offerings for the dead.",
  },
  {
    event_name: "Music & Art Festival",
    date: "2025-03-16",
    community_id: 1,
    site_id: 14,
    category: "event",
    description:
      "The Chacala community has hosted a free-admission Music and Arts Festival every year in March since 2014. It features children's shows, local visual and graphic artists, bands, soloists, dance groups, and even theater performances. The programming is varied and the festival is designed to include different nationalities, ages and origins. Why not organize your trip to Chacala during the Festival dates? It takes place during the Benito Juárez holiday weekend in mid-March.",
  },
];

const seedEvent = () => Event.bulkCreate(eventData);

module.exports = seedEvent;
