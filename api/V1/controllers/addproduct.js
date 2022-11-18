const Product = require("../models/product");
const { Router } = require("express");
const prod = Router();

prod.post("/addproduct", async (request, response) => {
  let title = request.body.title;
  let image = request.body.image;
  let price = request.body.price;
  let description = request.body.description;

  Product.find({ title }, async (error, result) => {
    if (error !== null && result.length < 0) {
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

  //get all products at once from an array
  ///////////////////////////////////////////
  /* let product = request.body.products;
  product.forEach(async (item) => {
    let exist = Product.find({ title: item.title }, async (error, result) => {
      result ? true : false;
    });
    if (exist) {
      let doc = new Product({
        title: item.name,
        price: item.price,
        description: item.description,
        image: item.image,
        version: item.version,
        weight: item.weight,
        pack: item.pack,
        type: item.type,
        year: item.year,
      });
      await doc.save();
    }
  }); */
});

module.exports = prod;
