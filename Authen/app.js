const ejs = require('ejs');
const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const encrypt = require('mongoose-encryption');

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  email : String,
  password : String
});

const secret = "Mysecret1."
userSchema.plugin(encrypt,{secret:secret, encryptedFields :['password']});

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

/*--------------------------------------------------------------------------------------------------------------------------------------------------------POST functions--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

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
      res.render("secrets");
    }
  })

})

app.post("/login",function(req,res){
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({email: username},function(err,foundUser){
    if(err){
      res.send(err)
    }
    else {
      if(foundUser.password == password){
        res.render("secrets");
      }
    }
  })
});




app.listen(3000, function() {
    console.log("Server started at 3000");
})
