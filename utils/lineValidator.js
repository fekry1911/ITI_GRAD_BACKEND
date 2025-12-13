const { check } = require("express-validator");
const validatorMidlleware = require("../middlewares/validatorMiddleWare");

exports.addLineToStationValidator = [
  check("stationId").isMongoId().withMessage("This Id Can't Be Found"),

  check("toStation")
    .trim()
    .notEmpty()
    .withMessage("Please Enter Station Name")
    .isLength({ min: 3 })
    .withMessage("Station Name Must Be More Than 3 Chars")
    .isLength({ max: 30 })
    .withMessage("Station Name Must Be Less Than 30 Chars"),

  check("price")
    .notEmpty()
    .withMessage("Please Enter Price")
    .isNumeric()
    .withMessage("Price Must Be a Number"),

  validatorMidlleware,
];

exports.getAllLineOfStationValidator = [
  check("stationId").isMongoId().withMessage("This Id Can't Be Found"),
  validatorMidlleware,
];
