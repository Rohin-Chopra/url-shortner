const express = require("express");
const urlRouter = require("./routes/urlRoutes");
const errorHandler = require("./middlewares/error");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello",
  });
});

app.use(urlRouter);

app.use(errorHandler);

app.all((req, res, next) => {
  next(new Error(`Route not found`));
});

module.exports = app;
