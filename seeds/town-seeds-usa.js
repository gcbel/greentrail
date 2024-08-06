const { Town } = require("../models/Location");

const townData = [
  // Colorado
  {
    town_name: "Aspen",
    province_id: 51,
  },
  {
    town_name: "Boulder",
    province_id: 51,
  },
  {
    town_name: "Crested Butte",
    province_id: 51,
  },
  {
    town_name: "Durango",
    province_id: 51,
  },
  {
    town_name: "Estes Park",
    province_id: 51,
  },
  {
    town_name: "Manitou Springs",
    province_id: 51,
  },
  {
    town_name: "Ouray",
    province_id: 51,
  },
  {
    town_name: "Salida",
    province_id: 51,
  },
  {
    town_name: "Telluride",
    province_id: 51,
  },
  {
    town_name: "Vail",
    province_id: 51,
  },
  // Massachusetts
  {
    town_name: "Arlington",
    province_id: 66,
  },
  {
    town_name: "Boston",
    province_id: 66,
  },
  {
    town_name: "Cambridge",
    province_id: 66,
  },
  {
    town_name: "Gloucester",
    province_id: 66,
  },
  {
    town_name: "Hadley",
    province_id: 66,
  },
  {
    town_name: "Nantucket",
    province_id: 66,
  },
  {
    town_name: "Newburyport",
    province_id: 66,
  },
  {
    town_name: "Provincetown",
    province_id: 66,
  },
  {
    town_name: "Rockport",
    province_id: 66,
  },
  {
    town_name: "Salem",
    province_id: 66,
  },
  // New Hampshire
  {
    town_name: "Concord",
    province_id: 74,
  },
  {
    town_name: "Hanover",
    province_id: 74,
  },
  {
    town_name: "Jackson",
    province_id: 74,
  },
  {
    town_name: "Keene",
    province_id: 74,
  },
  {
    town_name: "Lincoln",
    province_id: 74,
  },
  {
    town_name: "Manchester",
    province_id: 74,
  },
  {
    town_name: "North Conway",
    province_id: 74,
  },
  {
    town_name: "Portsmouth",
    province_id: 74,
  },
  {
    town_name: "Thornton",
    province_id: 74,
  },
  {
    town_name: "Wolfeboro",
    province_id: 74,
  },
];

const seedTown = () => Town.bulkCreate(townData);

module.exports = seedTown;
