const fs = require("fs");
let arguments = process.argv;
let fileExists = fs.existsSync("tasks.json");

let contents;

if (fileExists) {     //check JSON file to see if exists or not
    contents = fs.readFileSync("tasks.json", "utf-8");  //If exists, loads it

} else { 
    console.log("No such file, creating...");  
    fs.writeFileSync("tasks.json",`{"tasks":[]}`,"utf-8"); //If not exists, create file and create new object with empty array inside
    contents = `{"tasks": []}`; 
}

let jsonObjectConverted = JSON.parse(contents);  // converts string to object and stores it to a variable
  
let argumentEnter = arguments[2];  // third argument and set it to a variable

if (argumentEnter) {   // check if third argument exist or not 
    jsonObjectConverted.tasks.push(argumentEnter); //If exists, add the third argument to end of the array
     let jsonConverted = JSON.stringify(jsonObjectConverted); // converts object to string and stores it to a variable
    console.log(jsonConverted); //print out conversion
    fs.writeFileSync("tasks.json", jsonConverted, "utf-8"); //saves it in the file
} else {
    console.log("Sorry, no argument found. Enter an argument.");  //If doesn't exist, print out a message and exit
    return;
}

console.log("Saving file... ");
console.log("Please enter another arguemnt.");

