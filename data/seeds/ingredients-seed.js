
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'dough'},
        {ingredient_name: 'cheese'},
        {ingredient_name: 'tomato sauce'},
        {ingredient_name: 'pepporoni'},
        {ingredient_name: 'onion'}
      ]);
    });
};
