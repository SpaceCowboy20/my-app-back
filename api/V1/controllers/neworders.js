var User = require("../models/user");
var order = require("../models/order");
let jwt = require("jsonwebtoken");

let neworder = async (request, response) => {
  let token = request.header("TOKEN");
  if (!token || token.length === 0) {
    response.status(300).send("No token");
  } else {
    let decoded = jwt.verify(token, "Spacecowboy");
    let userid = decoded.id;
    let products = request.body.products;
    let status = request.body.status;
    let adress = request.body.adresse;
    try {
      let doc = new order({
        userid,
        products,
        status,
        adress,
      });
      await doc.save().then(async (item) => {
        let user = await User.findById(userid);
        let prevOrders = user.orders;
        let newOrders = [...prevOrders, item.id];
        await User.findByIdAndUpdate(userid, { orders: newOrders });
      });
      response.status(200).json({ status: "success" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ status: "erreur" });
    }
  }
};

module.exports = neworder;
