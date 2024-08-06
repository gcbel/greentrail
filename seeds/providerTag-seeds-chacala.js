const ProviderTag = require("../models/ProviderTag");

const providerTagData = [
  // EAT tags
  {
    tag_id: 1,
    provider_id: 1,
  },
  {
    tag_id: 1,
    provider_id: 2,
  },
  {
    tag_id: 1,
    provider_id: 3,
  },
  {
    tag_id: 1,
    provider_id: 4,
  },
  {
    tag_id: 1,
    provider_id: 5,
  },
  {
    tag_id: 1,
    provider_id: 6,
  },
  {
    tag_id: 1,
    provider_id: 7,
  },
  {
    tag_id: 1,
    provider_id: 8,
  },
  {
    tag_id: 1,
    provider_id: 9,
  },
  {
    tag_id: 1,
    provider_id: 10,
  },
  {
    tag_id: 1,
    provider_id: 11,
  },
  {
    tag_id: 1,
    provider_id: 12,
  },
  // STAY
  {
    tag_id: 3,
    provider_id: 13,
  },
  {
    tag_id: 3,
    provider_id: 14,
  },
  {
    tag_id: 3,
    provider_id: 15,
  },
  {
    tag_id: 3,
    provider_id: 16,
  },
  {
    tag_id: 3,
    provider_id: 17,
  },
  {
    tag_id: 3,
    provider_id: 18,
  },
  {
    tag_id: 3,
    provider_id: 19,
  },
  {
    tag_id: 3,
    provider_id: 20,
  },
  {
    tag_id: 3,
    provider_id: 21,
  },
  {
    tag_id: 3,
    provider_id: 22,
  },
  {
    tag_id: 3,
    provider_id: 23,
  },
  {
    tag_id: 3,
    provider_id: 24,
  },
  {
    tag_id: 3,
    provider_id: 25,
  },
  {
    tag_id: 3,
    provider_id: 26,
  },
  {
    tag_id: 3,
    provider_id: 27,
  },
  {
    tag_id: 3,
    provider_id: 28,
  },
  {
    tag_id: 3,
    provider_id: 29,
  },
  {
    tag_id: 3,
    provider_id: 30,
  },
  {
    tag_id: 3,
    provider_id: 31,
  },
  {
    tag_id: 3,
    provider_id: 32,
  },
];

const seedProviderTag = () => ProviderTag.bulkCreate(providerTagData);

module.exports = seedProviderTag;
