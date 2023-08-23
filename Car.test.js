const Car = require("./Car"); 

describe('Car', () => {

    test('can access the manufacturer property in the Car module', () => {
        const car = new Car("BMW", 30000, "Petrol");

        expected = "BMW";
        actual = car.manufacturer;
        expect(actual).toBe(expected);
    });

    test('can access the price property in the Car module', () => {
        const car = new Car("BMW", 30000, "Petrol");

        expected = 30000;
        actual = car.price;
        expect(actual).toBe(expected);
    });

    test('can access the engineType property in the Car module', () => {
        const car = new Car("BMW", 30000, "Petrol");

        expected = "Petrol";
        actual = car.engineType;
        expect(actual).toBe(expected);
    });
});

