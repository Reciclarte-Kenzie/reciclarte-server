const express = require("express");
const fileSystem = require("fs");
const router = express.Router();

router.get("/ideas/search", (request, response) => {
  const database = JSON.parse(fileSystem.readFileSync("db.json", "utf-8"));
  let ideasData = database.ideas;
  
  if(request.query.materials) {
    ideasData = ideasData.filter( idea => {
      const searchedMaterials = request.query.materials instanceof Array ? request.query.materials : [request.query.materials];

      return searchedMaterials.every(searchedMaterial => idea.materials.find(ideaMaterial => ideaMaterial.toLowerCase() == searchedMaterial.toLowerCase()));
    });
  }

  if(request.query.categories) {
    ideasData = ideasData.filter( idea => {
      const searchedCategories = request.query.categories instanceof Array ? request.query.categories : [request.query.categories];
  
      return searchedCategories.every(searchedCategorie => idea.categories.find(ideaCategorie => ideaCategorie.toLowerCase() == searchedCategorie.toLowerCase()));
    })
  }

  response.send(ideasData);
});

module.exports = router;