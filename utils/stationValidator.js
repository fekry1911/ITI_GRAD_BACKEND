const { check } = require("express-validator");

const validatorMidlleware = require("../middlewares/validatorMiddleWare");

exports.addStationValidator = [
  check("stationName")
    .notEmpty()
    .withMessage("Please Enter Station Name")
    .isLength({ min: 3 })
    .withMessage("Station Name Must Be More Than 3 Chars")
    .isLength({ max: 30 })
    .withMessage("Station Name Must Be less Than 30 Chars"),
  validatorMidlleware,
];
exports.getOneStationValidator = [
  check("stationId").isMongoId().withMessage("This Id Can't Be Found"),
  validatorMidlleware,
];
