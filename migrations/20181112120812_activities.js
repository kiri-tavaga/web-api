exports.up = (knex, Promise) => {
  return knex.schema.createTable('activities', table => {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('name')
    table.string('frequency')
    table.integer('level')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('activities')
}
