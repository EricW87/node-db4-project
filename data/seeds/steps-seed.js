
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, step_number: 1, instructions: 'open box'},
        {recipe_id: 1, step_number: 2, instructions: 'put on plate'},
        {recipe_id: 1, step_number: 3, instructions: 'microwave'},
        {recipe_id: 2, step_number: 1, instructions: 'make a circle of dough'},
        {recipe_id: 2, step_number: 2, instructions: 'add sauce'},
        {recipe_id: 2, step_number: 3, instructions: 'add cheese'},
        {recipe_id: 2, step_number: 4, instructions: 'bake for 50 minutes'},
        {recipe_id: 3, step_number: 1, instructions: 'go to papa murphys'},
        {recipe_id: 3, step_number: 2, instructions: 'buy it'},
        {recipe_id: 3, step_number: 3, instructions: 'cook in oven'},
      ]);
    });
};
