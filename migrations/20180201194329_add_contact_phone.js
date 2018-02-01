
exports.up = knex => knex.schema.table('contato', tb => {
  tb.string('telefone')
})

exports.down = function(knex, Promise) {
  return knex.schema.dropColumn('telefone')
};
