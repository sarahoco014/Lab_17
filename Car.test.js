const Car = require("./Car"); 

describe('Car', () => {

    test('can access manufacturer property in Car module', () => {
        const car = new Car('BMW', 30000, 'Petrol');

        expected = 'BMW';
        actual = car.manufacturer;
        expect(actual).toBe(expected);
    });

    test('can access price property in Car module', () => {
        const car = new Car('BMW', 30000, 'Petrol');

        expected = 30000;
        actual = car.price;
        expect(actual).toBe(expected);
    });

    test('can access engineType property in Car module', () => {
        const car = new Car('BMW', 30000, 'Petrol');

        expected = 'Petrol';
        actual = car.engineType;
        expect(actual).toBe(expected);
    });
});

