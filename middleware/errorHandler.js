export function errorHandler(err, req, res, next) {
  console.log("Lorem");

  return res.status(err.status || 500).json({
    error: err.message ?? "Something went wrong",
    timestamp: new Date().toISOString(),
  });
}
