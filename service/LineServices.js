const Line = require("../models/LinesModel");
const Station = require("../models/StationModel");
const ApiError = require("../utils/ApiError");
const mongoose = require("mongoose");

const asyncHandler = require("express-async-handler");

exports.addLineToStation = asyncHandler(async (req, res, next) => {
  const { stationId } = req.params;
  const { toStation, price, distance } = req.body;

  console.log("from" + stationId, "to" + toStation);
  if (stationId.toString() === toStation.toString()) {
    return next(
      new ApiError("Origin and destination stations must be different", 400)
    );
  }
  const [from, to] = await Promise.all([
    Station.findById(stationId),
    Station.findById(toStation),
  ]);

  const sameLine = await Line.findOne({
    fromStation: from._id,
    toStation: to._id,
  });

  if (sameLine) {
    return next(new ApiError("This Line Is Already exist", 400));
  }
  console.log("to from");

  if (!from || !to) {
    return next(new ApiError("One or both stations not found", 404));
  }
  console.log("to from not null");

  const lineData = await Line.create({
    fromStation: from._id,
    toStation: to._id,
    price,
    distance,
  });

  console.log("lne created");

  return res.status(201).json({ data: lineData });
});

exports.getAllLinesOfStation = asyncHandler(async (req, res, next) => {
  const { stationId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(stationId)) {
    return next(new ApiError("Station not found", 400));
  }
  const lineData = await Line.find({ fromStation: stationId })
    .populate("fromStation", "stationName")
    .populate("toStation", "stationName");

  res.status(200).json({
    count: lineData.length,
    results: lineData,
  });
  res.status(200).json({ count: lineData.length, results: lineData });
});

exports.getOneLine = asyncHandler(async (req, res, next) => {
  const { lineId } = req.params;
  console.log(lineId);

  const lineDetails = await Line.findById(lineId);
  res.status(200).json({ data: lineDetails });
});
