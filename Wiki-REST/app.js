const mongoose = require('mongoose');
const ejs = require('ejs');
const express = require('express');
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

mongoose.connect("mongodb://localhost:27107/wikiDB",{ useNewUrlParser: true, useUnifiedTopology: true  });

var ArticleSchema = new Schema({
  title: String,
  content: String
});

var Article = mongoose.model("Article",ArticleSchema);
