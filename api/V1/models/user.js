var mongoose = require("mongoose");

const user = mongoose.model("user", {
  username: String,
  password: String,
  email: String,
  tel: Number,
  date: Date,
});

module.exports = user;
