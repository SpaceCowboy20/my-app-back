const Cat = require("../models/cat");
const Product = require("../models/product");
const { Router } = require("express");
const prod = Router();

prod.post("/addproduct", async (request, response) => {
  let title = request.body.title;
  let image = request.body.image;
  let price = request.body.price;
  let description = request.body.description;
  Product.find({ title }, async (error, result) => {
    if (error === null && result.length > 0) {
      response.status(300).json({ status: "existe déjà" });
    } else {
      try {
        let doc = new Product({
          title,
          price,
          description,
          image,
        });
        await doc.save();
        response.status(200).json({ status: "success" });
      } catch (err) {
        response.status(400).json({ status: "erreur" });
      }
    }
  });
});

module.exports = prod;
