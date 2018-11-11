
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function () {
      // Inserts seed entries
      return knex('activities').insert([
        {id: 1, user_id: 1, name: 'gaming', frequency: 'Weekly', level: 5},
        {id: 2, user_id: 2, name: 'swimming', frequency: 'Monthly', level: 6},
        {id: 3, user_id: 3, name: 'coding', frequency: 'Annually', level: 7}
      ]);
    });
};
