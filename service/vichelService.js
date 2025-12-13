const Line = require("../models/LinesModel");
const VichelModel = require("../models/vichelModel");
const ApiError = require("../utils/ApiError");
const mongoose = require("mongoose");

const asyncHandler = require("express-async-handler");

exports.addVichelToLine = asyncHandler(async (req, res, next) => {
  const { lineId } = req.params;
  const vichelData = await VichelModel.create({
    ...req.body,
    line: lineId,
  });

  return res.status(201).json({ data: vichelData });
});

exports.getAllVichelOfLine = asyncHandler(async (req, res) => {
  const { lineId } = req.params;
  const vichelData = await VichelModel.find({ line: lineId });
  res.status(200).json({ count: vichelData.length, results: vichelData });
});
