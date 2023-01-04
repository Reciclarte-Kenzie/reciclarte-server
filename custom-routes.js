const express = require("express");
const fileSystem = require("fs");
const router = express.Router();

router.get("/ideas", (request, response) => {
  const database = JSON.parse(fileSystem.readFileSync("db.json", "utf-8"));
  let ideasData = database.ideas;

  let searchedMaterials = request.query.materials;
  let searchedCategories = request.query.categories;
  let searchedDifficultyLevel = request.query.difficulty_level;
  const maximumCost = request.query.maximum_cost;
  const searchedTitle = request.query.title?.toLowerCase();
  const orderedField = request.query.ordered_field;
  const orderDirection = request.query.ordered_direction || "asc";

  if (orderedField) {
    ideasData = ideasData.sort((previousIdea, actualIdea) => {
      if (orderDirection != "desc") {
        return previousIdea[orderedField] - actualIdea[orderedField];
      }

      return actualIdea[orderedField] - previousIdea[orderedField];
    });
  }

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

  if (searchedDifficultyLevel) {
    ideasData = ideasData.filter((idea) => {
      searchedDifficultyLevel =
        searchedDifficultyLevel instanceof Array
          ? searchedDifficultyLevel
          : [searchedDifficultyLevel];

      return searchedDifficultyLevel.some(
        (searchedDifficulty) => idea.difficulty_level == searchedDifficulty
      );
    });
  }

  if (maximumCost) {
    ideasData = ideasData.filter((idea) => idea.estimated_cost <= maximumCost);
  }

  if (searchedTitle) {
    ideasData = ideasData.filter((idea) =>
      idea.title.toLowerCase().includes(searchedTitle)
    );
  }

  response.send(ideasData);
});

router.get("/ideas/materials", (_, response) => {
  const database = JSON.parse(fileSystem.readFileSync("db.json", "utf-8"));
  const ideasData = database.ideas;

  const usedMaterials = [];

  ideasData.forEach((idea) =>
    idea.materials.forEach((ideaMaterial) => {
      const thisMaterialIsNotIncluded = !usedMaterials.includes(ideaMaterial);

      if (thisMaterialIsNotIncluded) {
        usedMaterials.push(ideaMaterial);
      }
    })
  );

  return response.send(usedMaterials);
});

router.get("/ideas/categories", (_, response) => {
  const database = JSON.parse(fileSystem.readFileSync("db.json", "utf-8"));
  const ideasData = database.ideas;

  const ownedCategories = [];

  ideasData.forEach((idea) =>
    idea.categories.forEach((ideaCategorie) => {
      const thisCategorieIsNotIncluded =
        !ownedCategories.includes(ideaCategorie);

      if (thisCategorieIsNotIncluded) {
        ownedCategories.push(ideaCategorie);
      }
    })
  );

  return response.send(ownedCategories);
});

module.exports = router;
