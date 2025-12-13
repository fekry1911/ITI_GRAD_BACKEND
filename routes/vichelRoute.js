const {
  addVichelToLine,
  getAllVichelOfLine,
} = require("../service/vichelService");
const express = require("express");
const {
  addVichelToLineValidator,
  getVichelOfLine,
} = require("../utils/vichelValidator");

const route = express.Router({ mergeParams: true });

route.route("/").post(addVichelToLineValidator, addVichelToLine);
route.route("/veichels").get(getVichelOfLine, getAllVichelOfLine);

module.exports = route;
