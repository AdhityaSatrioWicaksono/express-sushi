const CustomAPIError = require('./custom-api-error');
const BadRequestError = require('./bad-request');
const NotFoundError = require('./not-found');
const UnauthorizedError = require('./unauthorized');
const UnauthenticatedError = require('./unauthenticated');
const InternalServerError = require('./internal-server-error');

module.exports = {
  CustomAPIError,
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
  UnauthenticatedError,
  InternalServerError
};