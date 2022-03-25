const User = require("../models/user");
const jwt = require("jsonwebtoken");

let getHeart = async (request, response) => {
  let token = request.header("TOKEN");
  if (!token || token.length === 0) {
    response.status(300).send("no token");
  } else {
    try {
      let decoded = jwt.verify(token, "Spacecowboy");
      let userID = decoded.id;
      let getuser = await User.findById(userID);
      let hearts = getuser.heart;
      response.status(200).json({ status: "ok", hearts });
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = getHeart;
