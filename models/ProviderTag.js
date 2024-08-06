const { Model, DataTypes } = require("sequelize");
const {TABLES} = require('./Constants');
const sequelize = require("../config/connection");

class ProviderTag extends Model {}

ProviderTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    provider_id: {
      type: DataTypes.INTEGER,
      references: {
        model: TABLES.PROVIDER,
        key: "id",
        unique: false,
      },
      allowNull: false,
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: TABLES.TAG,
        key: "id",
        unique: false,
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "provider_tag",
  }
);

module.exports = ProviderTag;
