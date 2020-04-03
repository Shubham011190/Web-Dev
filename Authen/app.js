const ejs = require('ejs');
const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}));



app.listen(3000,function(){
  console.log("Server started at 3000");
})
