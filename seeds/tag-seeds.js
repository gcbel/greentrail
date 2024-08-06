const Tag = require("../models/Tag");

const tagData = [
  {
    tag_name: "amenity",
  },
  {
    tag_name: "coffee",
  },
  {
    tag_name: "cooking_lessons",
  },
  {
    tag_name: "eat",
  },
  {
    tag_name: "explore",
  },
  {
    tag_name: "flora_and_fauna",
  },
  {
    tag_name: "groceries",
  },
  {
    tag_name: "history",
  },
  {
    tag_name: "language_lessons",
  },
  {
    tag_name: "learn",
  },
  {
    tag_name: "massage",
  },
  {
    tag_name: "stay",
  },
];

const seedTag = () => Tag.bulkCreate(tagData);

module.exports = seedTag;
