const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Adding routes

const employee = require('./routes/employee');
app.use('/employee', employee);

mongoose.connect("https://localhost:27107/mernstack", {
    useNewUrlParser: true,
    useFindAndModify: false
}, (err) => {
    if (err) {
        console.log("Cannot connect to the Database");
        process.exit(1);
    }
    else {
        console.log("Connected to the database successfully!")
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("App running at port 5000")
});