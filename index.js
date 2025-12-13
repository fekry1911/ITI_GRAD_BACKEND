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
connectToMongo();

app.use("/api/v1/station", routeStation);

/*app.all("/*", (req, res, next) => {
  next(new ApiError("Can't find this path", 404));
});*/

app.use(globalError);

const server = app.listen(port, () => {
  console.log("hello From Server", port);
});
process.on("unhandledRejection", (error) => {
  console.error("ununhandledRejection Error " + error.message);
  server.close(() => {
    process.exit(1);
  });
});
