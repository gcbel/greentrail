const Community = require("./Community");
const { Event, EventSeries } = require("./Event");
const { Country, Province, Town, Site } = require("./Location");
const Provider = require("./Provider");
const ProviderTag = require("./ProviderTag");
const Tag = require("./Tag");
const Traveler = require("./Traveler");
// Event.belongsTo(Location, {});

Provider.belongsToMany(Tag, {
  through: {
    model: ProviderTag,
    unique: false,
  },
});

Community.hasMany(Provider, {
  foreignKey: "community_id",
  onDelete: "CASCADE",
});

Provider.hasOne(Community, {
  foreignKey: "community_id",
});

Site.hasOne(Provider, {
  foreignKey: "site_id",
  onDelete: "CASCADE",
});

Provider.hasOne(Site, {
  foreignKey: "site_id",
  onDelete: "CASCADE",
});

Tag.belongsToMany(Provider, {
  through: {
    model: ProviderTag,
    unique: false,
  },
});

Event.hasOne(Community, {
  foreignKey: "community_id",
  onDelete: "CASCADE",
});

Community.hasMany(Event, {
  foreignKey: "community_id",
  onDelete: "CASCADE",
});

EventSeries.belongsTo(Event, {
  foreignKey: "event_id",
});

Event.hasMany(EventSeries, {
  foreignKey: "event_id",
});

Country.hasMany(Province, {
  foreignKey: "country_id",
  onDelete: "CASCADE",
});

Province.belongsTo(Country, {
  foreignKey: "country_id",
});

Province.hasMany(Town, {
  foreignKey: "province_id",
  onDelete: "CASCADE",
});

Town.belongsTo(Province, {
  foreignKey: "province_id",
});

Town.hasOne(Community, {
  foreignKey: "town_id",
  onDelete: "CASCADE",
});
Community.belongsTo(Town, {
  foreignKey: "town_id",
});

Town.hasMany(Site, {
  foreignKey: "town_id",
});

Site.belongsTo(Town, {
  foreignKey: "town_id",
});

Community.hasMany(Site, {
  foreignKey: "community_id",
  onDelete: "CASCADE",
});
Site.belongsTo(Community, {
  foreignKey: "community_id",
});

Site.hasMany(Provider, {
  foreignKey: "site_id",
});

Provider.belongsTo(Site, {
  foreignKey: "site_id",
  onDelete: "CASCADE",
});

module.exports = {
  Community,
  Country,
  Event,
  EventSeries,
  Provider,
  Province,
  Site,
  Town,
  Traveler,
  Tag,
  ProviderTag,
};
