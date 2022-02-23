let Product = require("../models/product");

let updateProd = async (request, response) => {
  let title = request.body.title;
  let price = request.body.price;
  let description = request.body.description;
  let image = request.body.image;
  let itemid = request.body.itemid;
  let cat = request.body.cat;
  await Product.findByIdAndUpdate(itemid, {
    title,
    price,
    description,
    image,
    cat,
  });
  response.status(200).json({ status: "ok" });
};
module.exports = updateProd;
