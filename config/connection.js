/* DEPENDENCIES */
const Sequelize = require("sequelize");
require("dotenv").config();

/* SEQUELIZE */
const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL, {
      hooks: {
        beforeDefine: function (columns, model) {
          model.tableName = `${process.env.DB_NAME}_${model.name.singular}`;
        },
      },
    })
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "postgres",
        hooks: {
          beforeDefine: function (columns, model) {
            model.tableName = `${process.env.DB_NAME}_${model.name.singular}`;
          },
        },
      }
    );

/* EXPORTS */
module.exports = sequelize;
