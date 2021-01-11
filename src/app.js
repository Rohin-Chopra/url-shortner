const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const rfs = require("rotating-file-stream");
const urlRouter = require("./routes/url");
const errorHandler = require("./middlewares/error");

const app = express();

app.use(
  morgan("combined", {
    stream: rfs.createStream("access.log", {
      interval: "1d",
      path: path.join(__dirname, "logs"),
    }),
  })
);

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);
app.use(cors());

app.use(express.static(path.join(__dirname, "public"), { index: "_" }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use("/api", urlRouter);

app.use(errorHandler);

app.all((req, res, next) => {
  next(new Error(`Route not found`));
});

module.exports = app;
