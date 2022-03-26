var mongoose = require("mongoose");
const product = require("./product");

const orders = mongoose.model("orders", {
  userid: { type: mongoose.Types.ObjectId },
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: product,
    },
  ],
  date: { type: Date, default: Date.now },
  adress: String,
  status: String,
});

module.exports = orders;
