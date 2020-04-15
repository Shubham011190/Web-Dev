const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.ATLAS_URI;
mongoose.connect(URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log("Server started at port " + PORT);
});