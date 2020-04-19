
exports.up = function(knex) {
    return knex.schema
        .createTable("ingredients", table => {
            table.increments()
            table.text("ingredient_name").unique().notNullable();
        })
        .createTable("recipes", table => {
            table.increments()
            table.text("recipe_name").unique().notNullable();
        })
        .createTable("steps", table => {
            table.increments()
            table.integer("recipe_id")
                .notNullable()
                .references("id")
                .inTable("recipes")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
            table.integer("step_number").unsigned().notNullable()
            table.text("instructions").notNullable();
        })
        .createTable("recipe_ingredients", table => {
            table.integer("recipe_id")
                .notNullable()
                .references("id")
                .inTable("recipes")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
            table.integer("ingredient_id")
                .notNullable()
                .references("id")
                .inTable("ingredients")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
            table.primary(["recipe_id", "ingredient_id"])
        })
  };
  
  exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("ingredients")
        .dropTableIfExists("recipes")
        .dropTableIfExists("steps")
        .dropTableIfExists("recipe_ingrediants")
  };
  