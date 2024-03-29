const { StatusCodes } = require("http-status-codes");

module.exports = (err, req, res, next) => {
  console.error(err.message);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
};