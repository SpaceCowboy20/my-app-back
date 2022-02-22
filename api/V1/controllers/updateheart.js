const User = require("../models/user");

//updateheart receive an id and an array of products' ids
let updateHeart = async (request, response) => {
  let userID = request.body._id;
  let products = request.body.products;
  let user = await User.findByIdAndUpdate(userID, { heart: products });

  response.status(200).json({ status: "ok", user });
};

module.exports = updateHeart;

//getheart receive an id and send back it heartlist
