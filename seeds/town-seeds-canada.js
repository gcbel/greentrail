const { Town } = require("../models/Location");

const townData = [
  // British Columbia
  {
    town_name: "Creston",
    province_id: 2,
  },
  {
    town_name: "Fernie",
    province_id: 2,
  },
  {
    town_name: "Nelson",
    province_id: 2,
  },
  {
    town_name: "Penticton",
    province_id: 2,
  },
  {
    town_name: "Revelstoke",
    province_id: 2,
  },
  {
    town_name: "Squamish",
    province_id: 2,
  },
  {
    town_name: "Tofino",
    province_id: 2,
  },
  {
    town_name: "Victoria",
    province_id: 2,
  },
  {
    town_name: "Whistler",
    province_id: 2,
  },
  // Newfoundland
  {
    town_name: "Bonavista",
    province_id: 5,
  },
  {
    town_name: "Corner Brook",
    province_id: 5,
  },
  {
    town_name: "Fogo Island",
    province_id: 5,
  },
  {
    town_name: "Gander",
    province_id: 5,
  },
  {
    town_name: "St. John's",
    province_id: 5,
  },
  {
    town_name: "Stephenville",
    province_id: 5,
  },
  {
    town_name: "Twillingate",
    province_id: 5,
  },
  {
    town_name: "Trinity",
    province_id: 5,
  },
  // Quebec
  {
    town_name: "Baie-Saint-Paul",
    province_id: 9,
  },
  {
    town_name: "Cacouna",
    province_id: 9,
  },
  {
    town_name: "Frelighsburg",
    province_id: 9,
  },
  {
    town_name: "Ile d’Orléans",
    province_id: 9,
  },
  {
    town_name: "Kamouraska",
    province_id: 9,
  },
  {
    town_name: "Magog",
    province_id: 9,
  },
  {
    town_name: "Montreal",
    province_id: 9,
  },
  {
    town_name: "Notre-Dame-du-Portage",
    province_id: 9,
  },
  {
    town_name: "Quebec City",
    province_id: 9,
  },
  {
    town_name: "Saint-Pacôme",
    province_id: 9,
  },
  {
    town_name: "Sainte-Anne-de-Beaupré",
    province_id: 9,
  },
  {
    town_name: "Tadoussac",
    province_id: 9,
  },
];

const seedTown = () => Town.bulkCreate(townData);

module.exports = seedTown;
