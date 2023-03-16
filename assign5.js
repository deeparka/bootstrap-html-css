class Vehicle {

    #capacity = 4000;

    constructor(name, capacity) {
        this.name = name;
        this.#capacity = capacity;
    }

    startEngine() {
        console.log(`${this.name} can start and has capacity of ${this.#capacity}`);
    }

    stopEngine() {
        console.log(`${this.name} can stop and has capacity of ${this.#capacity}`);
    }

    run() {
        console.log(`${this.name} can run on manual mode`);
    }

    static brake() {
        console.log("We are calling brake static method");
    }

    callCapacity() {
        console.log(`${this.name} has this much ${this.#capacity} capacity`);
    }
    
}

class TwoWheeler extends Vehicle {

    tyre = 2;
    engine = 3000;

    constructor(name, capacity) {
        super(name, capacity);
    }
}

class ThreeWheeler extends Vehicle {
    
    tyre = 3;
    engine = 6000;

    constructor(name, capacity) {
        super(name, capacity);
    }

}

const bike = new TwoWheeler("Honda Xblade", 2000);
console.log(`Tyres of a bike: ${bike.tyre}`);
console.log(`Engine of a bike: ${bike.engine}`);
console.log(`Bike name: ${bike.name}`);
bike.callCapacity();
bike.startEngine();
bike.stopEngine();
bike.run();
TwoWheeler.brake();

console.log();

const auto = new ThreeWheeler("Tata Gas Auto", 3000);
console.log(`Tyres of a auto: ${auto.tyre}`);
console.log(`Engine of a auto: ${auto.engine}`);
console.log(`auto name: ${auto.name}`);
auto.callCapacity();
auto.startEngine();
auto.stopEngine();
auto.run();
ThreeWheeler.brake();