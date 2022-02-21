var mongoose = require("mongoose");
const cat = require("./cat");

const product = mongoose.model("product", {
  title: String,
  price: Number,
  description: String,
  image: String,
  cat: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = product;
