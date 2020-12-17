class Animal {
    constructor(alive) {
        this.living = alive; 
    }
    died() {
        this.living = false; 
    }
}



class Mammal extends Animal {
constructor(alive, eyeColor) {
    super(alive);
    this.tail = 1;
    this.type = "mammal";
    this.eyes = 2;
    this.eyeColor = eyeColor;

    }
    eat(){
        if("name" in this){
            console.log(this.name + " eats some food.");
        }else{
            console.log("Animal eats some food");
        }
    }
}

breed(partner, childName) {
    if(partner.constructor.name == this.constructor.name) {
        console.log("successful breeding");

        let eyeInheritance = Math.random() * 2;
        eyeInheritance = Math.floor(eyeInheritance);

        let childEyeColor;

        if (eyeInheritance == 0) {
            childEyeColor = this.eyeColor;
        } else {
            childEyeColor = partner.eyeColor;
        }

        let child = new this.constructor(childName, true, childEyeColor);
        return child;
        }
    }

class Dog extends Mammal {
    constructor(dogName, alive, eyeColor) {
        super(true); //this function needed to run the constructor for inheritance class of Mammal
        super(alive, eyeColor);
        this.legs = 4;
        this.name = dogName;
    }
    bark() {
        console.log("woof woof!");
    }
}

class Cat extends Mammal {
    constructor(catName, alive, eyeColor) {
        super(alive, eyeColor);
        this.legs = 4;
        this.name = catName;
    }
    meow(){
        console.log("meow meow");
    }
}

let dog1 = new Dog("FiFi", true, "brown");
let dog2 = new Dog("Fluffy", true, "green");
let dog3 = new Dog("Snoopy", true, "amber");

let newDog = dog2.breed(dog1, "Spot");
let newDog2 = dog3.breed(dog2, "DiDi");

console.log(newDog);
console.log(newDog2);

let cat1 = new Cat("Coco", true, "aqua");
let cat2 = new Cat("Jade", true, "amber");

let newCat1 = cat1.breed(cat2, "Smelly");

console.log(newCat1);
