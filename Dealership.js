// imports

const Car = require("./Car"); 
const Customer = require("./Customer"); 

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

Dealership.prototype.sellCar = function(customer, car) {
    const checkCarIndex = this.carsInStock.indexOf(car);

    if(checkCarIndex !== -1) {
        const customerBuysCar = customer.buyCar(car);

        if(customerBuysCar) {
            this.carsInStock.splice(checkCarIndex, 1);
            return true; // car sold successfully
        } else {
            console.log("Insufficient funds.");
            return false;
        } 
    } else {
        console.log("Car is not present in stock. Please choose another car.");
        return false;
    }
};

// exports

module.exports = Dealership;