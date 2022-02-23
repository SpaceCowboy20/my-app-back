var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var app = express();
var signup = require("./api/V1/controllers/signup");
const Login = require("./api/V1/controllers/login");
const jwt = require("jsonwebtoken");
const cat = require("./api/V1/controllers/addcategorie");
const prod = require("./api/V1/controllers/addproduct");
const updateHeart = require("./api/V1/controllers/updateheart");
const getHeart = require("./api/V1/controllers/getheart");
const neworder = require("./api/V1/controllers/neworders");
const updateProd = require("./api/V1/controllers/updateproduct");
const updateorder = require("./api/V1/controllers/updateorder");
const getProfil = require("./api/V1/controllers/getprofile");
const getAllProducts = require("./api/V1/controllers/getallproducts");

app.use(bodyParser());
app.use(cors());
app.post("/signup", signup);
app.post("/login", Login);
app.use("/", cat);
app.use("/", prod);
app.post("/updateheart", updateHeart);
app.get("/getheart", getHeart);
app.post("/neworder", neworder);
app.patch("/upprod", updateProd);
app.patch("/uporder", updateorder);
app.get("/profile", getProfil);
app.get("/allprod", getAllProducts);

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
