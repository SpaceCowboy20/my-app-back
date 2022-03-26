const User = require("../models/user");
var jwt = require("jsonwebtoken");

//updateheart receive an id and an array of products' ids
let updateHeart = async (request, response) => {
  let token = request.header("TOKEN");
  if (!token || token.length === 0) {
    response.status(300).send("no token");
  } else {
    try {
      let decoded = jwt.verify(token, "Spacecowboy");
      let userID = decoded.id;
      let products = request.body.products;
      let user = await User.findByIdAndUpdate(userID, { heart: products });

      response.status(200).json({ status: "ok", user });
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = updateHeart;

//getheart receive an id and send back it heartlist
