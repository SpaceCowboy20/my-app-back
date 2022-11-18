var mongoose = require("mongoose");
const cat = require("./cat");

const product = mongoose.model("product", {
  title: String,
  price: Number,
  description: String,
  image: String,
  type: String,
  date: {
    type: Date,
    default: Date.now,
  },
  weight: String,
  year: String,
  pack: [{ name: String, version: String, weight: String }],
});

module.exports = product;
