
exports.up = function(knex) {
    return knex.schema
        .createTable("ingrediants", table => {
            table.increments();
            table.text("ingredients-name").unique().notNullable();
        })
        .createTable("recipes", table => {
            table.increments();
            table.text("recipe-name").unique().notNullable();
        })
        .createTable("steps", table => {
            table.increments();
            table.integer("recipe-id")
                .notNullable()
                .references("id")
                .inTable("recipes")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
            table.integer("step_number").unsigned().notNullable
            table.text("intructions").notNullable();
        })
        .createTable("recipe-ingrediants", table => {
            table.increments();
            table.integer("recipe-id")
                .notNullable()
                .references("id")
                .inTable("recipes")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
            table.integer("ingredient-id")
                .notNullable()
                .references("id")
                .inTable("ingredients")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
            table.primary(["recipe-id", "ingredient-id"])
        })
  };
  
  exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("ingrediants")
        .dropTableIfExists("recipes")
        .dropTableIfExists("steps")
        .dropTableIfExists("recipe-ingrediants")
  };
  
