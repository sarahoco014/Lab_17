const Car = require("./Car"); 
const Dealership = require("./Dealership"); 
const Customer = require("./Customer");

describe('Customer', () => {

    let customer;

    beforeEach(() => {
        customer = new Customer("John", 100000);
      });

    // buyCar

    test('can customer buy car with sufficient funds', () => {
        const car1 = new Car('BMW', 30000, 'Petrol');

        const actual = customer.buyCar(car1);
        expected = true;

        expect(actual).toBe(expected);
    });

});