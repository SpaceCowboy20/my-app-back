var mongoose = require("mongoose");

const user = mongoose.model("user", {
  username: String,
  password: String,
  email: String,
  tel: Number,
});

module.exports = user;
