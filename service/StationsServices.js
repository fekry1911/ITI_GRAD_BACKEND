const station = require("../models/StationModel");
const asyncHandler = require("express-async-handler");

exports.addStation = asyncHandler(async (req, res) => {
  const newStation = await station.create(req.body);
  res.status(200).json({ data: newStation });
});
exports.getAllStations = asyncHandler(async (req, res) => {
  const allStations = await station.find();
  res.status(200).json({ count: allStations.length, data: allStations });
});
exports.getOneStation = asyncHandler(async (req, res) => {
  const { stationId } = req.params;
  const oneStation = await station.findById(stationId);
  res.status(200).json({ data: oneStation });
});
