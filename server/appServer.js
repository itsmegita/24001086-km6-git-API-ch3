const express = require("express");
const app = express();
const carRouter = require("../routes/carRoutes");

app.use(express.json());

app.use("/api/v1", carRouter);

module.exports = app;
