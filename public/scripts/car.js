class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `

    <div class="card col-md-4 mb-4" style="width: 333px">
    <img src="${this.image}" class="cars-photo" />
    <div class="card-body">
      <h5 class="card-title">${this.manufacture}/${this.model}</h5>
      <h5 class="card-price fw-bold">Rp ${this.rentPerDay} / hari</h5>
      <p class="card-text">${this.description}</p>
      <div class="row">
        <div class="col-1">
          <img src="images/fi_users.svg" />
        </div>
        <div class="col-10">
          <p>${this.capacity} Orang</p>
        </div>
      </div>
      <div class="row">
        <div class="col-1">
          <img src="images/fi_settings.svg" />
        </div>
        <div class="col-10">
          <p>${this.transmission}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-1">
          <img src="images/fi_calendar.svg" />
        </div>
        <div class="col-10">
          <p>Tahun ${this.year}</p>
        </div>
      </div>

      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  
    `;
  }
}
