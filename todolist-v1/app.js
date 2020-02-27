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
  switch (day) {
    case 0:
      dayval="Sunday";
      break;
    case 1:
      dayval="Monday";
      break;
    case 2:
      dayval="Tuesday";
      break;
    case 3:
      dayval="Wednesday";
      break;
    case 4:
      dayval="Thursday";
      break;
    case 5:
      dayval="Friday";
      break;
    case 6:
      dayval="Saturday";
      break;
    default:
      dayval = day;

  }
  res.render("list",{kindOfDay:dayval});
})


app.listen(3000,function(req,res){
  console.log("Server started at port 3000");
})
