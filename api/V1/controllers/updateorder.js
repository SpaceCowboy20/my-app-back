let Order = require("../models/order");

let updateorder = async (request, response) => {
  let orderid = request.body.orderid;
  let status = request.body.status;

  await Order.findByIdAndUpdate(orderid, { status });

  response.status(200).json({ status: "ok" });
};

module.exports = updateorder;
