const ejs = require('ejs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine', ejs);

app.get("/", function(req,res){
  res.sendFile( __dirname + "/index.html" );
})

app.post("/", function(req,res){
  res.send("hello");
})

app.listen(3000, function(){
  console.log("Server started at port 3000");
})
