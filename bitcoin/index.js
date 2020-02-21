const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req,res){
  // var num = req.body.cryp;
  // res.send("Val = " + num);
  var coinType = req.body.cryp;
  var cnvVal = req.body.type;
  var baseURL ="https://apiv2.bitcoinaverage.com/indices/global/ticker/" + coinType + cnvVal;
  request(baseURL,function(error,response,body){
    // console.log(body);
    var data = JSON.parse(body);
    var value = data.last;
    // console.log(value);
    var date = data.display_timestamp;
    res.write("<p>Date: " + date + "</p>");
    res.send("\n<h1>The price for bitcoin is " + value +" "+ cnvVal + "</h1>");
    // res.send();

  })
})
app.listen(3000, function(){
  console.log("Sever stared, port 3000");
})
