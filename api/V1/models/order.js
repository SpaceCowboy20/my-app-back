var mongoose = require("mongoose");
const product = require("./product");
const user = require("./user");

const orders = mongoose.model("orders", {
  user: {
    type: mongoose.Types.ObjectId,
  },
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: product,
    },
  ],
  date: { type: Date, default: Date.now },
  status: String,
});

module.exports = orders;
