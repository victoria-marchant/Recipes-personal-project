exports.up = (knex) => {
  return knex.schema.createTable('recipes', (table) => {
    table.increments().primary()
    table.string('title')
    table.integer('servings')
    table.string('cooking_time')
    table.string('publisher')
    table.string('summary')
    table.string('image_url')
    table.string('ingredients')
    table.string('method')
    table.string('weeks_dinners')
    table.string('favourited')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('recipes')
}
