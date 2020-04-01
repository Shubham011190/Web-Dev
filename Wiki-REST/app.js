const mongoose = require('mongoose');
const ejs = require('ejs');
const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

mongoose.connect("mongodb://localhost:27107/wikiDB",{ useNewUrlParser: true, useUnifiedTopology: true  });

var ArticleSchema = new mongoose.Schema({
  title: String,
  content: String
});

var Article = mongoose.model("Article",ArticleSchema);


app.get("/",function(req,res){
  res.send("Hello");
})

app.listen(3000, function(){
  console.log("Server started at port 3000");
})
