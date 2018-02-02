
exports.up = knex => knex.schema.createTable("produto", tb => {
  tb.increments("idproduto")
  tb.string("nomeproduto").notNullable()
  tb.integer("precoproduto").notNullable()
})

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("produto")
};
