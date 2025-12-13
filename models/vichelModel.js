const mongoose = require("mongoose");

const VeichelSchema = mongoose.Schema({
  model: {
    type: String,
    require: [true, "model of car must be add"],
  },
  plateNumber: {
    type: String,
    require: [true, "plateNumber of car must be add"],
  },
  driverName: {
    type: String,
    require: [true, "driverName of car must be add"],
  },
  capacity: {
    type: Number,
    require: [true, "capacity of car must be add"],
  },
  isAirConditioned: {
    type: Boolean,
    default: false, // علشان لو مذكرتش تبقى مش مكيفة
  },
  currentStatus: {
    type: String,
    enum: ["idle", "onRoute", "maintenance"],
    default: "idle",
  },
  line: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Line",
    required: true,
  },
});

module.exports = mongoose.model("Vichels", VeichelSchema);
