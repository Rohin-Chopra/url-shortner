const { exec } = require("child_process");
const dotenv = require("dotenv");

dotenv.config({});

const runApp = () => {
  const app = require("./app");
  const db = require("./db");
  const Url = require("./models/url");

  db.authenticate().then(() => console.log("database connected"));
  db.sync();

  const PORT = process.env.PORT || 3000;

  app.listen(process.env.PORT, () => {
    console.log(`now listening on port ${PORT}`);
  });
};

if (process.env.NODE_ENV === "development") {
  exec("heroku config:get DATABASE_URL", (err, stdout, stderr) => {
    if (err) {
      return;
    }
    process.env.DATABASE_URL = stdout.trim();
    runApp();
  });
} else {
  runApp();
}
