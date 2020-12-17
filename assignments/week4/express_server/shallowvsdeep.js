let myArray = [1, 2, 3];

let myCustomArray = myArray;

myCustomArray.pop();

myArray.push(10);

console.log(myCustomArray);
console.log(myArray);


let myOriginalObject = {
    "name": "Eduardo",
    "age": 30
};

let myUpdatedObject = myOriginalObject;
let myUpdatedObject2 = myOriginalObject;
let myUpdatedObject3 = myOriginalObject;
let myUpdatedObject4 = myUpdatedObject3;



myUpdatedObject.age = 31;

console.log(myOriginalObject);
console.log(myUpdatedObject);


let myTrueCopy = myArray.slice(0);

myTrueCopy.pop();

console.log(myTrueCopy, myArray);

console.log(typeof myArray);
console.log( Array.isArray(myArray) );
// Number.isNaN(), or isNaN()

// Does not apply to strings/numbers/booleans
let myNumber = 10;
let myUpdatedNumber = myNumber;

myUpdatedNumber += 10;

console.log(myNumber, myUpdatedNumber);