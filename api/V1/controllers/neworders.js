var User = require("../models/user");
var order = require("../models/order");

let neworder = async (request, response) => {
  let userid = request.body.userid;
  let products = request.body.products;
  let status = request.body.status;
  try {
    let doc = new order({
      userid,
      products,
      status,
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
};

module.exports = neworder;
