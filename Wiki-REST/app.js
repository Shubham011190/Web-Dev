const mongoose = require('mongoose');
const ejs = require('ejs');
const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

mongoose.connect("mongodb://localhost:27017/wikiDB",{ useNewUrlParser: true, useUnifiedTopology: true  });

var ArticleSchema = new mongoose.Schema({
  title: String,
  content: String
});

var Article = mongoose.model("Article",ArticleSchema);


app.get("/",function(req,res){
  res.send("Hello");
})

app.get("/articles",function(req,res){
  Article.find(function(err, foundArticles){
    // console.log(foundArticles);
    if(err){
      res.send(err)
    }
    else {
      res.send(foundArticles);
    }
  });
});

app.post("/articles", function(req,res){
  console.log(req.body.title);
  console.log(req.body.content);

  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content
  });
  newArticle.save(function(err){
    if(err){
      res.send(err)
    }
    else{
      res.send("Successfully added in DB");
    }
  });
});

app.delete("/articles", function(req,res){
  Article.deleteMany(function(err){
    if(err){
      res.send(err)
    }
    else {
      res.send("Deleted all data successfully")
    }
  });
});

app.listen(3000, function(){
  console.log("Server started at port 3000");
})
