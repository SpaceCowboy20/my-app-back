let Cat = require("../models/cat");

let getAllCats = async (request, response) => {
  let allCats = await Cat.find();
  response.status(200).json({ status: "sucess", cats: allCats });
};

module.exports = getAllCats;
