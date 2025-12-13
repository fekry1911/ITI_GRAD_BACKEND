const {
  addStation,
  getAllStations,
  getOneStation,
} = require("../service/StationsServices");
const express = require("express");
const {
  addStationValidator,
  getOneStationValidator,
} = require("../utils/stationValidator");
const LineRoute = require("./LineRoute");

const route = express.Router();

route.use("/:stationId/lines", LineRoute);

route.route("/").post(addStationValidator, addStation).get(getAllStations);
route.route("/:stationId").get(getOneStationValidator, getOneStation);

module.exports = route;
