var { schema, mongoose, model } = require("mongoose");
var mongoose = require("mongoose");
const catSchema = new schema({
  title: String,
  image: String,
  path: String,
  products: {
    type: mongoose.Types.ObjectId,
    ref: "product",
  },
});

const Cat = model("cat", catSchema);
module.exports = Cat;
