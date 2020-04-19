const db = require("./db-config");

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
  }

  function getRecipes() {
      return db("recipes");
  }

  function getShoppingList(id) {
    return db("ingredients as i", "i.id")
        .join("recipe_ingredients as ri", "ri.recipe_id")
        .where("ri.recipe_id", "=", id)
        .select("i.ingredient_name");
  }

  function getInstructions(id) {
      return db("steps")
        .where("steps.recipe_ip", "=", id)
        .select("steps.instructions");
  }