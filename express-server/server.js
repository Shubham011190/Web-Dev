const express = require('express');
const app = express();

app.get("/", function(req,res){
  res.send("<h1>Hello, World!<h1>");
})

app.get("/about",function(req,res){
  res.send("Welcome to my about page!");
})

app.get("/hobbies", function(req,res){
  res.send("<ul><li>Gaming :P</li><li>Coding</li><ul>");
})

app.listen(3000, function(){
  console.log("Server started at 3000");
})
