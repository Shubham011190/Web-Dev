const express = require('express');
const bodyParser = require('body-parser');
// const request = require('request');


const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req,res){
  res.sendFile( __dirname + "/signup.html" );
})

app.post("/", function(req,res){
  var fname = req.body.firstName;
  var lname = req.body.lastName;
  var email = req.body.email_add;
  console.log("F:" + fname + " L:" + lname+ " E:" + email);
})

app.listen(3000, function(){
  console.log("Server started at port 3000");
})
