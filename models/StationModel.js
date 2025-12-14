const mongoose = require("mongoose");

const StationSchema = new mongoose.Schema(
  {
    stationName: {
      type: String,
      required: [true, "Station name is required"],
      trim: true,
      unique: true,
    },
    location: {
      lat: {
        type: Number,
        required: [true, "Latitude is required"],
        min: -90,
        max: 90,
      },
      lng: {
        type: Number,
        required: [true, "Longitude is required"],
        min: -180,
        max: 180,
      },
    },
  },
  { timestamps: true }
);
StationSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Station", StationSchema);
