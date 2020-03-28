const knex = require("knex");
const configuracao = require("../../knexfile");
const connection = knex(configuracao.development);
module.exports = connection;