const Sequelize = require("sequelize");

module.exports = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  port: "5432",
  host: "ec2-34-200-158-205.compute-1.amazonaws.com",
});
