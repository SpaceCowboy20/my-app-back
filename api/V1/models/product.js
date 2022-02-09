var mongoose = require("mongoose");

const product = mongoose.model("product", {
  title: String,
  price: Number,
  description: String,
  image: String,
  cat: String,
  date: Date,
});

module.exports = product;
