var mongoose = require("mongoose");
const orders = require("./order");
const product = require("./product");

let user = mongoose.model("user", {
  username: String,
  password: String,
  email: String,
  tel: Number,
  region: String,
  heart: [Object],
  orders: [{ type: mongoose.Types.ObjectId, ref: orders }],
});

module.exports = user;
