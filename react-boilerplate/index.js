const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect("mongodb+srv://Shubham011190:Imshubham1619@react-blog-ahaea.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Successfully connected to DB"))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send("Hello!");
});

app.listen(3000, () => {
    console.log("Server started at port 3000");
});
