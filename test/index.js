const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req,res){
  var name = req.body.Name;
  var reg = req.body.req;
  
})
