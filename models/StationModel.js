const mongoose = require("mongoose");

const StationSchema = new mongoose.Schema(
  {
    stationName: {
      type: String,
      required: [true, "station name required"],
    },

    location: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
    lines: [
      {
        lineId: { type: mongoose.Schema.Types.ObjectId, ref: "Line" },
        toStation: { type: String },
        price: { type: Number },
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Station", StationSchema);
