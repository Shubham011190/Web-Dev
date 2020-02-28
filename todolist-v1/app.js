const express = require('express');
const ejs = require('ejs');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

let items = [];
let workItems = [];

app.get("/",function(req,res){
  // res.sendFile(__dirname + "/index.html");
  let date = new Date();
  let options = {
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  var dayval = date.toLocaleDateString("en-US",options);
  // var day = date.getDay();
  // var dayval="";
  // switch (day) {
  //   case 0:
  //     dayval="Sunday";
  //     break;
  //   case 1:
  //     dayval="Monday";
  //     break;
  //   case 2:
  //     dayval="Tuesday";
  //     break;
  //   case 3:
  //     dayval="Wednesday";
  //     break;
  //   case 4:
  //     dayval="Thursday";
  //     break;
  //   case 5:
  //     dayval="Friday";
  //     break;
  //   case 6:
  //     dayval="Saturday";
  //     break;
  //   default:
  //     dayval = day;
  //
  // }

  res.render("list",{title:dayval, listItem : items});
})

app.post("/", function(req,res){
  let item = req.body.inputval;
  let choice = req.body.buttonVal;
  // console.log(req.body);
  if(choice == "Work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }
})

app.get("/work", function(req,res){
  res.render("list",{title:"Work List", listItem : workItems});
})

app.post("/work", function(req,res){
  let item = req.body.inputval;
  workItems.push(item);
  res.redirect("/work");
})

app.listen(3000,function(req,res){
  console.log("Server started at port 3000");
})
