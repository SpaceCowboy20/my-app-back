var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var app = express();
var signup = require("./api/V1/controllers/signup");

app.use(bodyParser());
app.use(cors());
app.post("/signup", signup);

mongoose
  .connect(
    "mongodb+srv://Spacecowboy:Houloulou20@cluster0.xlfhh.mongodb.net/test"
  )
  .then((db) => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(780);
