var mongoose = require("mongoose");
const product = require("./product");
const user = require("./user");

const orders = mongoose.model("orders", {
  user: {
    type: mongoose.Types.ObjectId,
    ref: user,
  },
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: product,
    },
  ],
  date: Date,
  status: String,
});

module.exports = orders;
