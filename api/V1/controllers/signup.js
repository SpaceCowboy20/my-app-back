const users = require("../models/user");

let signup = async (request, response) => {
  let user = request.body.username;
  let pass = request.body.password;
  let email = request.body.email;
  let tel = request.body.tel;
  let region = request.body.region;

  users.find({ username: user }, async (erreur, resultat) => {
    if (erreur === null && resultat.length > 0) {
      response.status(300).json({ status: "cet utilisateur existe déjà" });
    } else {
      try {
        let doc = new users({
          username: user,
          password: pass,
          email: email,
          tel: tel,
          region,
        });
        await doc.save();
        response.status(200).json({ status: "inscription avec succès" });
      } catch (err) {
        console.log(err);
        response
          .status(300)
          .json({ status: "veuillez réessayer une erreur c'est produite" });
      }
    }
  });
};

module.exports = signup;
