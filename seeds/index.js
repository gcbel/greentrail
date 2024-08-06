const seedCountries = require("./country-seeds");
const seedProvinces = require("./province-seeds");
const seedTownsMexico = require("./town-seeds-mexico");
const seedTownsCanada = require("./town-seeds-canada");
const seedTownsUSA = require("./town-seeds-usa");
const seedSitesChacala = require("./site-seeds-chacala");
const seedCommunity = require("./community-seeds");
const seedProviders = require("./provider-seeds-chacala");
const seedTags = require("./tag-seeds");
const seedProviderTags = require("./providerTag-seeds-chacala");
const seedEvent = require("./event-seeds");
const seedEventSeries = require("./event-series-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  console.log();
  console.log("Seeds: start");
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedCountries();
  console.log("\n----- COUNTRIES SEEDED -----\n");

  await seedProvinces();
  console.log("\n----- PROVINCES SEEDED -----\n");

  await seedTownsMexico();
  console.log("\n----- TOWNS SEEDED for MEXICO -----\n");

  await seedTownsCanada();
  console.log("\n----- TOWNS SEEDED for CANADA -----\n");

  await seedTownsUSA();
  console.log("\n----- TOWNS SEEDED for USA -----\n");

  await seedSitesChacala();
  console.log("\n----- SITES SEEDED for CHACALA -----\n");

  await seedCommunity();
  console.log("\n----- COMMUNITIES SEEDED -----\n");

  await seedProviders();
  console.log("\n----- PROVIDERS SEEDED for CHACALA -----\n");

  await seedTags();
  console.log("\n----- TAGS SEEDED -----\n");

  await seedProviderTags();
  console.log("\n----- PROVIDER TAGS SEEDED for CHACALA -----\n");

  await seedEvent();
  console.log("\n----- EVENTS SEEDED -----\n");

  await seedEventSeries();
  console.log("\n----- EVENT SERIES SEEDED -----\n");

  console.log("Seeds: done");
  console.log();
  process.exit(0);
};

seedAll();
