const jwt = require("jsonwebtoken");
const users = require("../models/user");

const Login = async (request, response) => {
  let user = request.body.username;
  let pass = request.body.password;

  users.find({ username: user, password: pass }, (error, user) => {
    if (error == null && user.length > 0) {
      let userr = user[0];
      let tokendata = {
        id: userr._id,
        username: userr.username,
      };
      let token = jwt.sign(tokendata, "Spacecowboy");
      response.status(200).json({
        status: "success",
        token: token,
        user: userr._id,
      });
    } else {
      response.status(300).json({ status: "failed" });
    }
  });
};

module.exports = Login;
