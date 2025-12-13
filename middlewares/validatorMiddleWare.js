const { validationResult } = require("express-validator");

const validatorMidlleware = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    res.send({ errors: result.array() });
  }
  next();
};
module.exports = validatorMidlleware;
