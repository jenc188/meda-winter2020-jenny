//Class Notes 11.2.2020

// Loads up the Node FS module, so it can be used in this script.fs means file system
const fs = require("fs");

// process.argv has the command line information that was used to run this script.
let arguments = process.argv;

// console.log(arguments);

let fileName = arguments[2];

// console.log(fileName);

const fileExists = fs.existsSync(fileName);

if (fileExists === false) {
    console.log("Sorry, that file doesn't exist! Please check your filepath.");
    return;
}

// This method allows us to read a file.
let fileContents = fs.readFileSync(fileName, "utf-8");

// console.log(fileContents);

// Count Letter START
let contentArray = fileContents.split(""); // use split to split the strings into array with each character in a index and assign it to content Array. split() needs the variable to use filecontents.split(). No space between ""

// console.log(contentArray);

let letterCount = 0; // set letter count to zero 

for (let i = 0; i < contentArray.length; i++) {

    if (contentArray[i] === " " || contentArray[i] === "," || contentArray[i] === "." || contentArray[i] === "?" || contentArray[i] === "!") { // going thru the loop and if true when it comes to these characters, it will stop the if loop and continue going thru the for loop
        continue;
    } else {
        letterCount++; // if condition is false above, it would come to else and increment the counter.
    }

}

console.log(`This file ${fileName} contains a total of ${letterCount} letters.`); //print out the letter count in a string literal

// Count Letters END

// Count Words START

let wordArray = fileContents.split(" "); // Split string in the substring with a space " "

console.log(`It has a total of ${wordArray.length} words in it.`);

// Count Words END

// Count Sentences START

let sentenceCount = 0;

for (let i = 0; i < contentArray.length; i++) {
    if (contentArray[i] === "." || contentArray[i] === "!" || contentArray[i] === "?") {

        
        sentenceCount++;
    }
}

console.log(`It has a total of ${sentenceCount} sentences in it.`);