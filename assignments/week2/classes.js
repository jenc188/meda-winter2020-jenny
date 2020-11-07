//class notes 11/5/2020

let car1 = { //manually built
    "make": "Honda",
    "year": 1998,
    "model": "Civic"
};

let car2 = { //manaully built
    
    "year": 2010 ,
    "model": "Accord"
};

class Car {
    constructor(make, model, year) {
        if(year > 2021){
            console.log("Are you sure about the year for" + make + model + "? It seems to be really high!");
            this.year = NaN;
        } else {
            this.year = year;
        }
        this.make = make; //this repre current object being built
        this.year = year;
        this.model = model;
        this.currentFuelGallons = 0;
        this.fuelCapacity = 15;
        this.registeredDate = new Date(Date.now());
        console.log("Building" + make+ model + "is complete.");
    }
    checkFuel() {/* method. only function can be in a class. no need var or function declare. object can only have property and method. var should be in constructor and not outside in the class*/
        console.log(`The car ${this.make} ${this.model} has ${this.currentFuelGallons} gallons of gas left in the tank.`);
    }
    refuel(gallons){
        if (typeof gallons === "number"){
            if (gallons > this.fuelCapacity - this.currentFuelGallons){
                console.log
                this.currentFuelGallons = this.fuelCapacity;
        } else {
            this.currentFuelGallons = this.currentFuelGallons + gallons
        };
            

            console.log("Refuel sucessful, added" + gallons + "gallons" + "to the tank");
        } else {
            console.log("Refueling needs a valid number!");
        }
    }
}





let car3 = new Car("Tesla", "X", 2016); //using class to build
let car4 = new Car("Chevy", "Bolt", 2016);


car4.checkFuel();
car3.checkFuel();
car4.refuel(4);

console.log("")
//console.log(car1, car2);
//console.log(car3, car4);
