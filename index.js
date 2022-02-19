var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var app = express();
var signup = require("./api/V1/controllers/signup");
const Login = require("./api/V1/controllers/login");
const jwt = require("jsonwebtoken");
const cat = require("./api/V1/controllers/cat");
const prod = require("./api/V1/controllers/product");

app.use(bodyParser());
app.use(cors());
app.post("/signup", signup);
app.post("/login", Login);
app.use("/", cat);
app.use("/", prod);

mongoose
  .connect(
    "mongodb+srv://Spacecowboy:Houloulou20@cluster0.xlfhh.mongodb.net/test"
  )
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(780);
