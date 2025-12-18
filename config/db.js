const donenv = require("dotenv");
const mongoose = require("mongoose");
donenv.config("../config.env");

const url = process.env.DB_URL;

function connectToMongo() {
  return mongoose.connect(url).then((e) => {
    console.log("connect to mongo");
  });
}
module.exports = {
  connectToMongo,
};
