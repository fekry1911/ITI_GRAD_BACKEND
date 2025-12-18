const globalError = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: err.status || "error",
    error: err,
    message: err.message,
  });
};

module.exports = globalError;
