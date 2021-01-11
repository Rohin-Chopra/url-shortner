const Sequelize = require("sequelize");
const db = require("../db");

const Url = db.define(
  "url",
  {
    longUrl: {
      type: Sequelize.STRING,
      field: "long_url",
      allowNull: false,
    },
    urlId: {
      type: Sequelize.STRING,
      field: "url_id",
      primaryKey: true,
      allowNull: false,
    },
    clickCount: {
      type: Sequelize.INTEGER,
      field: "click_count",
      defaultValue: 0,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Url;
