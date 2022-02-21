const mongoose = require("mongoose");
const product = require("./product");
const user = require("./user");

let heart = mongoose.model("hearts", {
  user: { type: mongoose.Types.ObjectId },
  products: [{ type: mongoose.Types.ObjectId, ref: product }],
});

module.exports = heart;
