const mongoose = require("mongoose");

const LineSchema = new mongoose.Schema(
  {
    station: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Station",
      required: true,
    },
    fromStation: {
      type: String,
    },
    toStation: {
      type: String,
      unique: [true, "must be unique"], // Unique index. If you specify `unique: true`
      required: [true, "line name required"],
    },
    price: {
      type: Number,
      required: [true, "price required"],
    },
  },
  { timestamps: true }
);
LineSchema.index({ station: 1, toStation: 1 }, { unique: true });

module.exports = mongoose.model("Line", LineSchema);
