/* 
    We will see example of class which violates the LSP principle. 
    Here Vehicle class is responsible for starting engine of vehicle and bicycle doesn't have engine
    so it clearly violates the LSP.
*/

/*
abstract class Vehicle { 
  abstract startEngine(): void; 
} 

  

class Car extends Vehicle { 
  startEngine() { 
    console.log("Car engine started"); 
  } 
} 

  

class Bicycle extends Vehicle { 
  startEngine() { 
    throw new Error("Bicycles don't have engines"); 
  } 

}
*/

/*
    Correct example of LSP which follows the LSP principle.
    Here Vehicle interface is responsible for starting engine of vehicle and bicycle doesn't have engine
    so it doesn't violate the LSP.
*/

abstract class EngineVehicle {
    startEngine() {}
}

abstract class NonEngineVehicle {
    startPedal() {}
}

class Car extends Vehicle {
    startEngine() {
        console.log("Car engine started");
    }
}

class Bicycle extends NonEngineVehicle {
    startPedal() {
        console.log("Bicycle pedal started");
    }
}

const car = new Car();
car.startEngine();

const bicycle = new Bicycle();  
bicycle.startPedal();
