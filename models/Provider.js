const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { TABLES } = require("./Constants");

class Provider extends Model {}

Provider.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    provider_name: {
      type: DataTypes.STRING,
      allowNull: false,
      verification: {
        isAlpha: true,
      },
    },
    community_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: TABLES.COMMUNITY,
        key: "id",
      },
    },
    site_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: TABLES.SITE,
        key: "id",
      },
    },
    service: {
      type: DataTypes.STRING,
      allowNull: false,
      verification: {
        isAlpha: true,
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      verification: {
        isAlpha: true,
      },
    },
    
   
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "provider",
  }
);

module.exports = Provider;