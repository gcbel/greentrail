const { Model, DataTypes } = require("sequelize");
const { TABLES } = require("./Constants");
const sequelize = require("../config/connection");

class Community extends Model {}

Community.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    community_name: {
      type: DataTypes.STRING,
      allowNull: false,
      verification: {
        isAlpha: true,
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    town_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: TABLES.TOWN,
        key: "id",
      },
    },
    community_center_site_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: TABLES.SITE,
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "community",
  }
);

module.exports = Community;
