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

exampleModel.findByIdAndDelete("5fc7e75dc8cb8a04647304ce", (error, results) => {
    if (error) {
        console.log("There was an error! Try again.", error);
    } else {
        console.log("Sucessfully deleted the following entry from the database: ", results);
    }
});