// imports

const Car = require("./Car"); 

// constructor

const Dealership = function(name, maxCars) {
    this.name = name;
    this.maxCars = maxCars;
    this.carsInStock = [];
};

// getters and setters

Dealership.prototype.getName = function() {
    return this.name;
}

Dealership.prototype.setName = function(name) {
    this.name = name;
}

Dealership.prototype.getMaxCars = function() {
    return this.maxCars;
}

Dealership.prototype.setMaxCars = function(maxCars) {
    this.maxCars = maxCars;
}

// custom methods 

Dealership.prototype.countCars = function() {
    return this.carsInStock.length;
}

Dealership.prototype.addCarToStock = function(car) {
    if(this.carsInStock.length < this.maxCars) {
      this.carsInStock.push(car); 
      return true; 
    } else {
        console.log("Maximum number of cars reached, cannot add car.");
        return false;
    }
}

Dealership.prototype.getCarManufacturers = function() {
    return this.carsInStock.map((car) => car.manufacturer);
}

Dealership.prototype.findCarsByManufacturer = function(manufacturer) {
    return this.carsInStock.filter(car => car.manufacturer === manufacturer);
}

Dealership.prototype.totalValueOfCarsInStock = function() {
    return this.carsInStock.reduce((total, car) => total + car.price, 0);
}

// exports

module.exports = Dealership;