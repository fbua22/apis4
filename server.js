const express = require("express");
const mongoose = require("mongoose");
const app = express();
const mockachino = require('mockachino');
const bodyParser = require('body-parser');


const uri =
  "mongodb+srv://fbua:Universidad.2021@cluster0.lzyczz0.mongodb.net/";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(3000, () => {
  console.log("Server started on port 3000");
});