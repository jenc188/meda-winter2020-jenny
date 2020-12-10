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

exampleModel.find({username: "Ben"}, (error, results) => {

    if (error) {
        console.log(error);
    } else {

        for (let i = 0; i < results.length; i++) {

            exampleModel.findByIdAndDelete(results[i]._id, (error, results) => {
                if (error) {
                    console.log("There was an error! Try again.", error);
                } else {
                    console.log("Successfully deleted entries with Ben");
                }
            });

        }
    }

});