const Line = require("../models/LinesModel");
const Station = require("../models/StationModel");
const ApiError = require("../utils/ApiError");
const mongoose = require("mongoose");

const asyncHandler = require("express-async-handler");

exports.addLineToStation = asyncHandler(async (req, res, next) => {
  const { stationId } = req.params;
  const station = await Station.findById(stationId);
  const lineData = await Line.create({
    ...req.body,
    station: stationId,
    fromStation: station.stationName,
  });
  station.lines.push({
    lineId: lineData._id,
    toStation: lineData.toStation,
    price: lineData.price,
  });
  await station.save();

  return res.status(201).json({ data: lineData });
});

exports.getAllLinesOfStation = asyncHandler(async (req, res) => {
  const { stationId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(stationId)) {
    return next(new ApiError("Station not found", 400));
  }
  const lineData = await Line.find({ station: stationId });
  res.status(200).json({ count: lineData.length, results: lineData });
});
