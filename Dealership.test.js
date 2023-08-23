const Car = require("./Car"); 
const Dealership = require("./Dealership"); 
const Customer = require("./Customer");

describe('Dealership', () => {

    let dealership;
    
    beforeEach(() => {
        dealership = new Dealership("Trade Centre UK", 2);
      });

      // testing access 

      test('can access name property in Dealership module', () => {

        expected = 'Trade Centre UK';
        actual = dealership.name;

        expect(actual).toBe(expected);
    });

    test('can access maxCars property in Dealership module', () => {
        const car = new Car('BMW', 30000, 'Petrol');

        expected = 2;
        actual = dealership.maxCars;

        expect(actual).toBe(expected);
    });

    // canCountCars

    test('can count cars', () => {
        const car1 = new Car('BMW', 30000, 'Petrol');
        const car2 = new Car('Toyota', 50000, 'Diesel');

        dealership.addCarToStock(car1);
        dealership.addCarToStock(car2);
        
        expected = 2;
        actual = dealership.countCars();

        expect(actual).toBe(expected);
    });

    // addCarToStock

    test('can add car to stock', () => {
        const car1 = new Car('BMW', 30000, 'Petrol');
        const car2 = new Car('Toyota', 50000, 'Diesel');

        const result1 = dealership.addCarToStock(car1);
        const result2 = dealership.addCarToStock(car2);
        
        expected1 = true;
        expected2 = true;

        actual1 = result1;
        actual2 = result2;

        expect(actual1).toBe(expected1);
        expect(actual2).toBe(expected2);
    });

    test('cannot add car to stock when stock beyond capacity', () => {
        const car1 = new Car('BMW', 30000, 'Petrol');
        const car2 = new Car('Toyota', 50000, 'Diesel');
        const car3 = new Car('Honda', 40000, 'Gas');

        dealership.addCarToStock(car1);
        dealership.addCarToStock(car2);
        const result3 = dealership.addCarToStock(car3);
        
        expected3 = false;
        actual3 = result3;

        expect(actual3).toBe(expected3);
    });

    // getCarManufacturers

    test('can return array containing each car manufacturer', () => {
        const car1 = new Car('BMW', 30000, 'Petrol');
        const car2 = new Car('Toyota', 50000, 'Diesel');

        dealership.addCarToStock(car1);
        dealership.addCarToStock(car2);

        expected = ['BMW', 'Toyota'];
        actual = dealership.getCarManufacturers();

        expect(actual).toStrictEqual(expected);
    });

    // findCarsByManufacturer

    test('can find cars by manufacturer', () => {
        const car1 = new Car('BMW', 30000, 'Petrol');
        const car2 = new Car('Toyota', 50000, 'Diesel');

        dealership.addCarToStock(car1);
        dealership.addCarToStock(car2);

        const manufacturer = 'BMW';

        expected = [car1];
        actual = dealership.findCarsByManufacturer(manufacturer);

        expect(actual).toStrictEqual(expected);
    });

    // totalValueOfCarsInStock

    test('can calculate toal value of cars in stock', () => {
        const car1 = new Car('BMW', 30000, 'Petrol');
        const car2 = new Car('Toyota', 50000, 'Diesel');
        
        dealership.addCarToStock(car1);
        dealership.addCarToStock(car2);

        expected = 80000;
        actual = dealership.totalValueOfCarsInStock();

        expect(actual).toBe(expected);
    });

    // sellCar
    test('can sell car', () => {
        const car1 = new Car('BMW', 30000, 'Petrol');
        const car2 = new Car('Toyota', 50000, 'Diesel');
        
        dealership.addCarToStock(car1);
        dealership.addCarToStock(car2);

        const customer1 = new Customer("John", 100000)

        const actual = dealership.sellCar(customer1, car1);
        expected = true;

        expect(actual).toBe(expected);
    });

});