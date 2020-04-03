const ejs = require('ejs');
const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true});

const userSchema = new mongoose.Schema({
  email : String,
  password : String
});

const User = new mongoose.model("User",userSchema);

app.get("/", function(req, res) {
    res.render("home")
});

app.get("/login", function(req, res) {
    res.render("login")
});

app.get("/register", function(req, res) {
    res.render("register")
});


app.post("/register", function(req,res){
  const newUser = new User({
    email : req.body.username,
    password: req.body.password
  });
  newUser.save(function(err){
    if(err){
      res.send(err);
    }
    else {
      res.send("secrets");
    }
  })

})

app.listen(3000, function() {
    console.log("Server started at 3000");
})
