const mongoose = require ("mongoose");

const arguments = process.argv;

const db = credentials.dbURL;

const options = {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true};

let connection = mongoose.connect(db, options, (error) => {

    if (error) {
        console.log("There was an error! Try again.", error);
    } else {
        console.log("Sucessfully connected to MongoDB Database genericDatabase.");
    }
});

let Schema = mongoose.Schema;

let exampleSchema = new Schema({
    username: String,
    password: String,
    created: String,
    age: Number,
    accountClosed: Boolean
});

let exampleModel = new mongoose.model("firstcollections", exampleSchema);

let exampleDocument = new exampleModel({
    username: arguments[2],
    password: arguments[3],
    created: Date.now(),
    age: arguments[4],
    accountClosed: false
});



exampleDocument.save((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Document saved!");
    }

   

});

/*let secondDocument = new exampleModel({
    username: "Nina",
    created: "Dec 3, 2020",
    age: 27,
    accountClosed: true,
    nickname: "Ni"
});

secondDocument.save((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Document saved!");
    }
});*/
    
setTimeout(()=>{
    mongoose.connection.close();
    console.log ("connection closed!");
}, 5000);