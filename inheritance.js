// Parent class
class Vehicle {
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(`${this.name} is moving`);
  }
}

// Single Inheritance - Child class
class Car extends Vehicle {
  constructor(name, wheels) {
    super(name);  // Call the parent constructor
    this.wheels = wheels;
  }

  move() {
    console.log(`${this.name} is driving on ${this.wheels} wheels`);
  }
}

// Multilevel Inheritance - Grandchild class
class Truck extends Car {
  constructor(name, wheels, capacity) {
    super(name, wheels);  // Call the parent constructor
    this.capacity = capacity;
  }

  load() {
    console.log(`${this.name} is loading with ${this.capacity} tons capacity`);
  }
}

// Instantiate objects
let vehicle = new Vehicle('Generic Vehicle');
let car = new Car('Sedan', 4);
let truck = new Truck('Big Truck', 6, 10);

vehicle.move();  // Generic Vehicle is moving
car.move();      // Sedan is driving on 4 wheels
truck.load();    // Big Truck is loading with 10 tons capacity
