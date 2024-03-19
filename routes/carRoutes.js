const express = require("express");
const router = express.Router();
const carController = require("../controller/carController");

router.route("/").get(carController.getRootEndpoint);

router
  .route("/cars")
  .get(carController.getCarsData)
  .post(carController.createNewCars);

router
  .route("/cars/:id")
  .get(carController.getCarsById)
  .patch(carController.updateCars)
  .delete(carController.deleteCars);

module.exports = router;
