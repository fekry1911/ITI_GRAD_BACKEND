const {
  addLineToStation,
  getAllLinesOfStation,
} = require("../service/LineServices");
const express = require("express");
const {
  addLineToStationValidator,
  getAllLineOfStationValidator,
} = require("../utils/lineValidator");
const route = express.Router({ mergeParams: true });
const vichelRoute = require("./vichelRoute");
route.use("/:lineId", vichelRoute);

route
  .route("/")
  .post(addLineToStationValidator, addLineToStation)
  .get(getAllLineOfStationValidator, getAllLinesOfStation);

module.exports = route;
