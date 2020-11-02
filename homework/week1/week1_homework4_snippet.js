// This is the start of a function definition, it has the name of "myFunction", and has two parameters to hold incoming data, "option1" and "option2".
function myFunction(option, option2) {

    //This mulitply the paramenters passed in,"option1" by "option2",and then product of these is assigned to a declared variable named "product". 
    let product = option * option2;

    //This prints out the value of "product" to the console.
    console.log(product);

    //This concatenate the string "The value of the option parameter is" with the value of "option1" and print out into combined string.
    console.log("The value of the option parameter is " + option);

    //This "if" condition check whether value of "option" is strictly equal to zero(strict equality comparison-No type coercion ). 
    if (option === 0) {
        
        //If the value of "option" is strictly equal to 0, this will run and it will return the string "Everything is good!"
        return "Everything is good!";
    
    //This second "if" condition will run when the first "if" condition is false. It will check whether the value "option" is strictly equal to 1 or not. 
    } else if (option === 1) {
        
        // If value of "option" is strictly equal to 1, this will run and return the string " An error happened!"
        return "An error happened!";
    //This is third "if" condition will run if all the previous conditions are false. This will check if value of "option" is strictly equal to -1.
    } else if (option === -1) {
        
        //If value of "option" is strictly equal to -1, this will run and return the string " Everything is bad!""
        return "Everything is bad!";
    }

}

// The function myFunction is called here with two arguments 1 and 11. Then the returned value from the function call is assigned to a declared variable named "result". 
let result = myFunction(1, 11);

//The function myFunction is called here with two arguments 2 and 200. Then the returned value from this function call is assigned to a declared variable named "result2". 
let result2 = myFunction(2, 200);

//This "if" condition will check the value of "result" is strictly equal to the string "An error happened" AND if the value  of "result2" is strictly equal to the string "An error happened". Both conditions need to be true for the execution of the statement inside the bracket.
if ( result === "An error happened" && result2 === "An error happened") {

    //When the "if" conditon is true, this will run and print to the console a string " Catastrophic failure".
    console.log("Catastrophic failure.");

}