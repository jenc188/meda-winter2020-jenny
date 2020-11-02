// This is the start of a function definition, it has the name of "myFunction", and has two parameters to hold incoming data, "option1" and "option2".
function myFunction(option, option2) {

    //This mulitply the paramenters passed in,"option1" by "option2",and then product of these is assigned to a variable named "product". "Product" is declared here.
    let product = option * option2;

    //This prints out the "product" to the console.
    console.log(product);

    //this concatenated a string with "option1" and print out the combined string.
    console.log("The value of the option parameter is " + option);

    //This is a "if" condition to check if the "option" is strictly equal to zero(strict equality comparison-No type coercion ). 
    if (option === 0) {
        
        //If the "option" is strictly equal to 0, this will run and it will return the string "Everything is good!"
        return "Everything is good!";
    //It will move to this second "if" condition when the first "if" is false. It will check if "option" is strictly equal to 1. 
    } else if (option === 1) {
        
        // If "option" is strictly equal to 1, this will run and return the string " An error happened!"
        return "An error happened!";
    //It will move to this third "if" condition if all the previous conditions are false. This will check if "option" is strictly equal to -1.
    } else if (option === -1) {
        
        //If "option" is strictly equal to -1, this will run and return the string " Everything is bad!""
        return "Everything is bad!";
    }

}

// The function myFunction is called here with two arguments 1 and 11. Then the returned value from this is assigned to a variable named "result". "Result" is declared here.
let result = myFunction(1, 11);

//The function myFunction is called here with two arguments 2 and 200. Then the returned value from this is assigned to a variable named "result2". "Result2" is declared here.
let result2 = myFunction(2, 200);

//This "if" condition check if "result" is strictly equal to the string "An error happened" AND if "result2" is strictly equal to the string"An error happened". Both conditions need to be true for the execution of the statement inside the bracket.
if ( result === "An error happened" && result2 === "An error happened") {

    //When the "if" conditon is true, this will run and print to the console  a string " Catastrophic failure".
    console.log("Catastrophic failure.");

}