module.exports = (err, req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    console.log(res.statusCode);
    return res.json({
      message: err.message,
    });
  }
  res.json({
    message: err.message,
    stack: err.stack,
  });
};
