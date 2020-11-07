const fs = require("fs");

let contents = fs.readFileSync("smallessay.txt", "utf-8");

fs.writeFileSync("example2.txt", "\n\n this is some text.","utf-8");

// this on add to the end of the file and will replace the file. append including the previous content with new content
fs.appendFileSync("example2.txt", "\n\n this is some text.","utf-8"); 

fs.existsSync("example.txt");

fs.readFile("smallessay.txt","utf-8", (error, text) => {
        if(error){
            console.log("we have an error!", error.message);
        }else{
            console.log("reading done!", text);
        }
    }); 
    console.log("program done!");