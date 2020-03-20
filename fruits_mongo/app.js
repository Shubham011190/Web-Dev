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

const orange = new Fruit({
  name:"Orange",
  rating:8,
  review: "Mehh"
});

const banana = new Fruit({
  name:"Banana",
  rating:9,
  review: "Awesome!"
});

// Fruit.insertMany([orange,banana], function(err){
//   if(err){
//     console.log(err);
//   }
//   else {
//     console.log("2 items successfully added to the Fruit model");
//   }
// });



const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

// const person1 = new Person({
//   name:"Shubham",
//   age:20
// });

// person1.save();


Fruit.find(function(err,fruits){
  if(err){
    console.log(err);
  }
  else {
    console.log(fruits);

  fruits.forEach(function(fruit){
    console.log(fruit.name);
  })
  }
})
