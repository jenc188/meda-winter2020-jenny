// Class Notes 11.2.2020

let arguments = process.argv; //argv is argument vector array containing the command that ran the program. See below.
//console.log(arguments[0]); <--this will print /usr/local/bin/node, actual program running your js file
//console.log(arguments[1]);<--this will print path directory where file located.<path to your file>/index.js as that is the argument passed to node.js as the file to be run by node

let number1 = arguments[2];
let mathOperator = arguments[3];
let number2 = arguments[4];

//console.log(arguments);

let num1Converted = parseInt(number1);
let num2Converted = parseInt(number2);

if(isNaN(num1Converted) || isNaN(num2Converted)){
    console.log("Error 532: The first or second number is not an actual number! Try again. Note the * is not a valid math operator.");
    //return or else to 
//} else if (mathOperator !== "+" || mathOperator !== "/" ){

} else{
    if(mathOperator === "+" || mathOperator === "plus"){
    console.log(`The sum of ${num1Converted} and ${num2Converted} is ${num1Converted + 
    num2Converted}.`);
    } else if (mathOperator === "-" || mathOperator === "minus"){
        console.log(`The difference of ${num1Converted} and ${num2Converted} is ${num1Converted - 
        num2Converted}.`);
    }else if (mathOperator === "x" || mathOperator === "times" ){
            console.log(`The product of ${num1Converted} and ${num2Converted} is ${num1Converted *
                num2Converted}.`);
    } else if (mathOperator === "/" || mathOperator === "divide"){
        console.log(`The quotient of ${num1Converted} and ${num2Converted} is ${num1Converted / 
            num2Converted}.`);

        }
            

}


//console.log(num1Converted + num2Converted);

//console.log(typeof num1Converted, typeof numb2Converted);