const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.send("Hello");
})


app.listen(3000,function(req,res){
  console.log("Server started at port 3000");
})
