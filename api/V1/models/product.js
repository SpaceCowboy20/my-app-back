var mongoose = require("mongoose");

const product = mongoose.model("product", {
  title: String,
  price: Number,
  description: String,
  image: String,
  cat: { type: mongoose.Types.ObjectId, rel: "cat" },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = product;
