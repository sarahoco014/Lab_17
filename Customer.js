// imports

const Car = require("./Car"); 
const Dealership = require("./Dealership"); 

// constructor

const Customer = function(name, wallet) {
    this.name = name;
    this.wallet = wallet;
    this.car = null;
};

// getters and setters

Customer.prototype.getName = function() {
    return this.name;
}

Customer.prototype.setName = function(name) {
    this.name = name;
}

Customer.prototype.getWallet = function() {
    return this.wallet;
}

Customer.prototype.setWallet = function(wallet) {
    this.wallet = wallet;
}

// custom methods

Customer.prototype.buyCar = function(car) {
    if(this.wallet >= car.price) {
        this.wallet = this.wallet - car.price;
        this.car = car;
        return true;
    } else {
        console.log("The car is not available. Please try again another time.");
        return false;
    }
}

// exports

module.exports = Customer;
