const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  // res.sendFile(__dirname + "/index.html");
  var date = new Date();
  var day = date.getDay();
  if(day==6 || day==7){
    res.send("<h1>Weekend</h1>");
  }
  else{
    res.send("<h1>Weekday :(</h1>")
  }
})


app.listen(3000,function(req,res){
  console.log("Server started at port 3000");
})
