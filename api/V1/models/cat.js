var mongoose = require("mongoose");
var product = require("./product");

const Cat = mongoose.model("item", {
  title: String,
  image: String,
  path: String,
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: product,
    },
  ],
});

module.exports = Cat;
