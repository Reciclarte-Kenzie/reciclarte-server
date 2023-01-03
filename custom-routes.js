const express = require("express");
const fileSystem = require("fs");
const router = express.Router();

router.get("/ideas", (request, response) => {
  const database = JSON.parse(fileSystem.readFileSync("db.json", "utf-8"));

  let ideasData = database.ideas;
  let searchedMaterials = request.query.materials;
  let searchedCategories = request.query.categories;
  let difficultyLevel = request.query.difficulty_level;
  let maximumCost = request.query.maximum_cost;

  if (searchedMaterials) {
    ideasData = ideasData.filter((idea) => {
      searchedMaterials =
        searchedMaterials instanceof Array
          ? searchedMaterials
          : [searchedMaterials];

      return searchedMaterials.every((searchedMaterial) =>
        idea.materials.find(
          (ideaMaterial) =>
            ideaMaterial.toLowerCase() == searchedMaterial.toLowerCase()
        )
      );
    });
  }

  if (searchedCategories) {
    ideasData = ideasData.filter((idea) => {
      searchedCategories =
        searchedCategories instanceof Array
          ? searchedCategories
          : [searchedCategories];

      return searchedCategories.every((searchedCategorie) =>
        idea.categories.find(
          (ideaCategorie) =>
            ideaCategorie.toLowerCase() == searchedCategorie.toLowerCase()
        )
      );
    });
  }

  if (maximumCost) {
    ideasData = ideasData.filter((idea) => idea.estimated_cost <= maximumCost);
  }

  response.send(ideasData);
});

module.exports = router;
