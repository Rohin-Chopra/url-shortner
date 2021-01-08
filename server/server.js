const dotenv = require("dotenv");
dotenv.config({});

const app = require("./app");
const db = require("./db");
const Url = require("./models/url");

db.authenticate().then(() => console.log("database connected"));
db.sync(/* { force: true } */);

const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT, () => {
  console.log(`now listening on port ${PORT}`);
});
