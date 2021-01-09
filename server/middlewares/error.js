module.exports = (err, req, res, next) => {
  if (!res.statusCode) {
    res.status(500);
  }
  if (process.env.NODE_ENV === "production") {
    return res.json({
      status: `${res.statusCode}`.startsWith("4") ? "error" : "fail",
      message: err.message,
    });
  }
  res.json({
    message: err.message,
    stack: err.stack,
  });
};
