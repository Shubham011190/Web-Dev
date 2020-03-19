const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true ,useUnifiedTopology: true,});

//Creating schema.
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

//Describing collection. Use singular string since it automatically gets converted to plural.
const Fruit = mongoose.model("Fruit", fruitSchema);

//Adding a document to the collection.
const fruit = new Fruit({
  name:"Apple",
  rating:7,
  review: "Pretty solid"
});

//Saving the document to the collection
fruit.save();


const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person1 = new Person({
  name:"Shubham",
  age:20
});

person1.save();
