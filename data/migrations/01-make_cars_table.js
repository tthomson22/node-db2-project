exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable('cars', tbl => {
    //id
    tbl.increments()
    //vin
    tbl.string('vin', 17).notNullable().unique()
    //make
    tbl.string('make', 128).notNullable()
    //model
    tbl.string('model', 128).notNullable()
    //mileage
    tbl.integer('mileage').unsigned().notNullable()
    //title
    tbl.string('title', 128)
    //transmission
    tbl.string('transmission', 128)
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('cars')
};
