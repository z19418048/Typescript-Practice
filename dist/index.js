"use strict";
class Car {
    start() {
        Car._activeCars++;
    }
    stop() {
        Car._activeCars--;
    }
    static get activeCars() {
        return Car._activeCars;
    }
}
Car._activeCars = 0;
let car1 = new Car();
let car2 = new Car();
car1.start();
console.log(Car.activeCars);
car2.start();
console.log(Car.activeCars);
//# sourceMappingURL=index.js.map