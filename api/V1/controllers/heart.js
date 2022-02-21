const User = require("../models/user");
let updateHeart = async (request, response) => {
  let userID = request.body._id;
  let thisuser = await User.find({ _id: userID }).populate("heart");
  console.log(thisuser[0].heart);
  response.status(200).json({ status: "ok" });
};

module.exports = updateHeart;
