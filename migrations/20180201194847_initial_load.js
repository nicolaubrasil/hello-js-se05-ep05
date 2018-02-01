const person = [
 { idcontato: 1, nomecontato: 'Nicolau', dtcriacaocontato: '2018-02-01', telefone: '(85) 3223.9363' },
 { idcontato: 2, nomecontato: 'Yuri', dtcriacaocontato: '2018-02-01', telefone: '(85) 99982.8999' },
 { idcontato: 3, nomecontato: 'Leonardo', dtcriacaocontato: '2018-02-01', telefone: '(85) 98123.1234' }
]

exports.up = knex => knex('contato').insert(person)

exports.down = knex => knex('contato').truncate()