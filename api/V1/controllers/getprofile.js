let User = require("../models/user");

let getProfil = async (request, response) => {
  let userid = request.body.userid;

  let profil = await User.findById(userid, "username email tel heart orders");
  console.log(profil);
  response.status(200).json({ status: "sucess", profile: profil });
};
module.exports = getProfil;
