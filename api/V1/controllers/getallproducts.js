let Product = require("../models/product");

let getAllProducts = async (request, response) => {
  let allproducts = await Product.find();
  response.status(200).json({ status: "sucess", products: allproducts });
};
module.exports = getAllProducts;
