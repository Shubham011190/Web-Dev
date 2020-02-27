const express = require('express');
const ejs = require('ejs');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/",function(req,res){
  // res.sendFile(__dirname + "/index.html");
  var date = new Date();
  var day = date.getDay();
  var dayval="";
  if(day==6 || day==7){
    // res.sendFile(__dirname + "/weekend.html");
    dayval="Weekend";
  }
  else{
    // res.sendFile(__dirname + "/Weekday.html");
    dayval="Weekday";
  }
  res.render("list",{kindOfDay:dayval});
})


app.listen(3000,function(req,res){
  console.log("Server started at port 3000");
})
