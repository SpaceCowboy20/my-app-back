const mongoose = require("mongoose");
const product = require("./product");

let cat = mongoose.model("cat", {
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

module.exports = cat;
