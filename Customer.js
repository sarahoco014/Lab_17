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

