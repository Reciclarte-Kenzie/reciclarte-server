const express = require("express");
const fileSystem = require("fs");
const router = express.Router();

router.get("/ideas/search", (request, response) => {
  const searchedMaterials = request.query.materials instanceof Array ? request.query.materials : [request.query.materials];
  const ideasData = (JSON.parse(fileSystem.readFileSync("db.json", "utf-8")).ideas);
  
  const ideasWithTheSpecifiedMaterial = ideasData.filter( idea => {
    return searchedMaterials.every(searchedMaterial => idea.materials.find(ideaMaterial => ideaMaterial.toLowerCase() == searchedMaterial.toLowerCase()));
  });

  response.send(ideasWithTheSpecifiedMaterial);
});

module.exports = router;