exports.noRouteError = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};
exports.globalError = (err, req, res, next) => {
  let code = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(code).json({
    status: code,
    message: err.message,
    stack: process.env.ENV === "DEV" && err.stack,
  });
};
