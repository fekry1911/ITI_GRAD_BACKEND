const {
  //addStation,
  getAllStations,
  getOneStation,
  addStations,
  getNearbyStations
} = require("../service/StationsServices");
const express = require("express");
const {
  addStationsValidator,
  getOneStationValidator,
} = require("../utils/stationValidator");
const LineRoute = require("./LineRoute");

const route = express.Router();

route.use("/:stationId/lines", LineRoute);

route.route("/").post(addStationsValidator, addStations).get(getAllStations);
route.route("/near").get(getNearbyStations);
route.route("/:stationId").get(getOneStationValidator, getOneStation);

module.exports = route;
