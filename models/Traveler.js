/* DEPENDENCIES */
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class Traveler extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Traveler.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   isEmail: true,
      // },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      // validate: len[6],
    },
    googleId: {
      type: DataTypes.STRING,
      allowNull: true, // Only OAuth users will have this field populated
    },
  },
  {
    hooks: {
      beforeCreate: async (newTravelerData) => {
        if (newTravelerData.password) {
          newTravelerData.password = await bcrypt.hash(
            newTravelerData.password,
            10
          );
        }
        return newTravelerData;
      },
      beforeUpdate: async (updatedTravelerData) => {
        if (newTravelerData.password) {
          updatedTravelerData.password = await bcrypt.hash(
            updatedTravelerData.password,
            10
          );
        }
        return updatedTravelerData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "traveler",
  }
);

/* EXPORTS */
module.exports = Traveler;
