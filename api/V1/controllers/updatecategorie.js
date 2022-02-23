let Cat = require("../models/cat");

// to be tested
let updateCat = async (request, response) => {
  let catId = request.body.catId;
  let title = request.body.title;
  let image = request.body.image;
  let path = request.body.path;
  let products = request.body.products;

  Cat.findByIdAndUpdate(catId, {
    title,
    image,
    path,
    products,
  });

  response.status(200).json({ status: "ok" });
};
module.exports = updateCat;
