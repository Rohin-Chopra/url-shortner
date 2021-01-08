const express = require("express");
const cors = require("cors");
const urlRouter = require("./routes/url");
const errorHandler = require("./middlewares/error");

const app = express();

app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);
app.use(cors());

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
