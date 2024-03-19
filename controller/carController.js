const fs = require("fs");

const cars = JSON.parse(fs.readFileSync(`${__dirname}/../data/cars.json`));

const getRootEndpoint = (req, res, next) => {
  res.status(200).json({
    message: "ping successfully",
  });
};

const getCarsData = (req, res, next) => {
  res.status(200).json({
    status: "success",
    totalData: cars.length,
    data: {
      cars,
    },
  });
};

const getCarsById = (req, res, next) => {
  const id = req.params.id;

  const car = cars.find((carsId) => carsId.id === id);

  if (!car) {
    return res.status(404).json({
      status: "fail",
      message: `Tidak ditemukan car dengan ID : ${id}`,
    });
  }

  res.status(200).json({
    status: "success",
    totalData: cars.length,
    data: {
      car,
    },
  });
};

const createNewCars = (req, res) => {
  const newCar = req.body;
  console.log("New Car:", newCar);
  cars.push(newCar);

  fs.writeFile(
    `${__dirname}/../data/cars.json`,
    JSON.stringify(cars),
    (err) => {
      if (err) {
        return res.status(500).json({
          status: "error",
          message: "Gagal menambahkan mobil baru",
        });
      }
    }
  );

  res.status(201).json({
    status: "success",
    data: {
      car: newCar,
    },
  });
};

const updateCars = (req, res) => {
  const id = req.params.id;

  const car = cars.find((carsId) => carsId.id === id);
  const carIndex = cars.findIndex((carsId) => carsId.id === id);

  if (!car) {
    return res.status(404).json({
      status: "fail",
      message: `tidak ditemukan car dengan ID : ${id}`,
    });
  }

  cars[carIndex] = { ...cars[carIndex], ...req.body };

  fs.writeFile(
    `${__dirname}/../data/cars.json`,
    JSON.stringify(cars),
    (err) => {
      if (err) {
        return res.status(500).json({
          status: "error",
          message: "Gagal update data",
        });
      }

      res.status(200).json({
        status: "success",
        message: "Berhasil update data",
        data: {
          updated_data: cars[carIndex],
        },
      });
    }
  );
};

const deleteCars = (req, res) => {
  const id = req.params.id;

  const car = cars.find((carsId) => carsId.id === id);
  const carIndex = cars.findIndex((carsId) => carsId.id === id);

  if (!car) {
    return res.status(404).json({
      status: "fail",
      message: `Tidak ditemukan car dengan ID : ${id}`,
    });
  }

  const deletedCars = cars.splice(carIndex, 1);

  fs.writeFile(`${__dirname}/data/cars.json`, JSON.stringify(cars), (err) => {
    res.status(200).json({
      status: "success",
      message: "Berhasil delete data",
      deleted_data: deletedCars,
    });
  });
};

module.exports = {
  getRootEndpoint,
  getCarsData,
  getCarsById,
  createNewCars,
  updateCars,
  deleteCars,
};
