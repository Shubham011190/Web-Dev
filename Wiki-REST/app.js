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

//------------------------------------------------------------------------------------------------------------------------
//------------------------------------ Request functions for all articles-------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------

app.route("/articles")
.get(function(req,res){
  Article.find(function(err, foundArticles){
    // console.log(foundArticles);
    if(err){
      res.send(err)
    }
    else {
      res.send(foundArticles);
    }
  });
})

.post(function(req,res){
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
})

.delete(function(req,res){
  Article.deleteMany(function(err){
    if(err){
      res.send(err)
    }
    else {
      res.send("Deleted all data successfully")
    }
  });
});

//------------------------------------------------------------------------------------------------------------------------
//---------------------------------Request functions for a specified article----------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
app.route("/articles/:articleTitle")
.get(function(req,res){
  Article.findOne({title:req.params.articleTitle},function(err,foundArticle){
    if(err){
      res.send(err);
    }
    else {
      res.send(foundArticle)
    }
  })
})

.put(function(req,res){
  Article.update(
    {title: req.params.articleTitle},
    {title: req.body.title, content: req.body.content},
    {overwrite: true},
    function(err){
      if(err){
        res.send(err)
      }
      else {
        res.send("Updated successfully");
      }
    }
  )
})

.patch(function(req,res){
  Article.update(
    {title:req.params.articleTitle},
    {$set : req.body},
    function(err){
      if(err){
        res.send(err);
      }
      else {
        res.send("Updated successfully");
      }
    }
  )
})
.delete(function(req,res){
  Article.deleteOne(
    {title: req.params.articleTitle},
    function(err){
      if(err){
        res.send(err)
      }
      else {
        res.send("Article deleted successfully")
      }
    }
  )
});

app.listen(3000, function(){
  console.log("Server started at port 3000");
})
