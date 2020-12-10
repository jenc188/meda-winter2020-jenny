class Mammal {
constructor() {
    this.tail = 1;
    this.type = "mammal";
    this.eyes = 2

    }
    eat(){
        if("name" in this){
        console.log(this.name + " eats some food.");
        }else{
            console.log("Animal eats some food");
        }
    }
}


class Dog extends Mammal {
    constructor(dogName) {
        super(true); //this function needed to run the constructor for inheritance class of Mammal
        this.legs = 4;
        this.name = dogName;
    }
    bark(){
        console.log("woof woof!");
    }
}

class Cat {
    constructor(){
        
        this.legs = 4;
        this.name = null;
    }
    meow(){
        console.log("meow");
    }
}

let animal1 = new Dog();

animal1.bark();
animal1.eat();