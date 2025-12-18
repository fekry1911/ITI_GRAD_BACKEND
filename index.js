const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
dotenv.config({ path: "config.env" });

const { connectToMongo } = require("./config/db");
const routeStation = require("./routes/StationRoue");
const routeLine = require("./routes/LineRoute");
const ApiError = require("./utils/ApiError");
const globalError = require("./middlewares/GlobalMiddleWares");

const app = express();

app.use(express.json());

const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === "Development") {
  app.use(morgan("dev"));
  console.log(`Mode : ${process.env.NODE_ENV}`);
}
app.use("/api/v1/station", routeStation);
app.use(globalError);

let server;

connectToMongo().then(() => {
  server = app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
  });
});

process.on("unhandledRejection", (error) => {
  console.error("ununhandledRejection Error " + error.message);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});
