const Cat = require("../models/cat");
const { Router } = require("express");
const cat = Router();

cat.post("/addcategorie", async (request, response) => {
  let title = request.body.title;
  let image = request.body.image;
  let path = request.body.path;
  Cat.find({ title }, async (error, result) => {
    if (error === null && result.length > 0) {
      response.status(300).json({ status: "existe déjà" });
    } else {
      try {
        let doc = new Cat({
          title,
          image,
          path,
        });
        await doc.save();
        response.status(200).json({ status: "success" });
      } catch (error) {
        response.status(300).json({ status: error });
      }
    }
  });
});

module.exports = cat;
