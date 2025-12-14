const {
  addVichelToLine,
  getAllVichelOfLine,
  getVichelOfLine,
} = require("../service/vichelService");
const express = require("express");
const {
  addVichelToLineValidator,
  getVichelOfLineValidator,
} = require("../utils/vichelValidator");

const route = express.Router({ mergeParams: true });

route
  .route("/")
  .post(addVichelToLineValidator, addVichelToLine)
  .get(getVichelOfLineValidator, getAllVichelOfLine);
route.route("/:veivheId").get(getVichelOfLine);

module.exports = route;
