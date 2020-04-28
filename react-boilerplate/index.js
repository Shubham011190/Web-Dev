const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { User } = require('./model/user');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect("mongodb+srv://Shubham011190:Imshubham1619@react-blog-ahaea.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Successfully connected to DB"))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send("Hello!");
});

app.post('/api/users/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, userData) => {
        if (err) return res.json({ success: false, err });
    })
    return res.status(200);
})

app.listen(3000, () => {
    console.log("Server started at port 3000");
});
