const {
  addLineToStation,
  getAllLinesOfStation,
  getOneLine,
  
} = require("../service/LineServices");
const express = require("express");
const {
  addLineToStationValidator,
  getAllLineOfStationValidator,
} = require("../utils/lineValidator");
const route = express.Router({ mergeParams: true });

const vichelRoute = require("./vichelRoute");
route.use("/:lineId/vichels", vichelRoute);

route
  .route("/")
  .post(addLineToStationValidator, addLineToStation)
  .get(getAllLineOfStationValidator, getAllLinesOfStation);
route.route("/:lineId").get(getOneLine);

module.exports = route;
