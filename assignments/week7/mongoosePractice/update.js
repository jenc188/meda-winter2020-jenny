const mongoose = require ("mongoose");

const db = credentials.dbURL;

const options = {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true};

let connection = mongoose.connect(db, options, (error) => {
    if (error) {
        console.log("There was an error! Try again.", error);
    } else {
        console.log("Sucessfully connected to MongoDB Database genericDatabase.");
    }
});


let exampleSchema = new mongoose.Schema({
    username: String,
    password: String,
    created: String,
    age: Number,
    accountClosed: Boolean
});

let exampleModel = new mongoose.model("firstcollections", exampleSchema);

exampleModel.findByIdAndUpdate("5fca76a5be4e9d037e04b8d7", {age: 31},(error, results) => {
    if (error) {
        console.log("There was an error! Try again.", error);
    } else {
        console.log("Document was update! This is the the orginal document: ", results);
    }
});