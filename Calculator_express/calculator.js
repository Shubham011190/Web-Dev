const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
  // res.send('Hello World!');
  res.sendFile(__dirname + "/index.html" );
})

app.post("/", function(req, res){
  // console.log(req.body);
  var num1  = Number(req.body.val1);
  var num2 = Number(req.body.val2);
  var result = num1 + num2;
  res.send("Added sum is " + result);
})

app.get("/bmi",function(req,res){
  res.sendFile(__dirname + "/bmiCalc.html");
})

app.post("/bmi",function(req ,res){
  var w  = Number(req.body.weight);
  var h = Number(req.body.height);
  var bmi = (w*w)/h;
  res.send("Your BMI val is " + bmi);
})
app.listen(3000, function(){
  console.log("Server started at port 3000");
})
