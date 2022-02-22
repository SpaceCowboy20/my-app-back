const User = require("../models/user");

let getHeart = async (request, response) => {
  let userID = request.body._id;
  let getuser = await User.findById(userID);
  let hearts = getuser.heart;
  console.log(hearts);
  response.status(200).json({ status: "ok", hearts });
};

module.exports = getHeart;
