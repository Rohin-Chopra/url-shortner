const shortid = require("shortid");
const isURL = require("isurl");
const catchAsync = require("express-async-handler");
const Url = require("./../models/url");

exports.redirectToLongUrl = catchAsync(async (req, res, next) => {
  const urlId = req.params.id;
  const { longUrl } = (await Url.findOne({ urlId })).dataValues;
  if (!longUrl) {
    return next(new Error("No short URL found for this long URL"));
  }
  res.redirect(longUrl);
});

exports.createShortUrl = catchAsync(async (req, res, next) => {
  const { longUrl } = req.body;
  console.log(req.body);
  if (!isURL(new URL(longUrl))) {
    res.status(400);
    return next(new Error("Invalid URL"));
  }
  const url = (
    await Url.findOrCreate({
      where: {
        longUrl,
      },
      defaults: {
        urlId: shortid.generate(),
      },
    })
  )[0].dataValues;

  res.status(201).json({
    message: "success",
    shortUrl: `${req.protocol}://${req.get("host")}${req.originalUrl}/${
      url.urlId
    }`,
  });
});
