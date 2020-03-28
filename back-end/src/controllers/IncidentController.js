
const connection = require("../database/connection");

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;

        const [count] = await connection('incidents').count();
        res.header('X-Total-Count', count['count(*)']);

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                "incidents.*",
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);
        res.send({ incidents });
    },

    async store(req, res) {

        const { title, description, value } = req.body;
        const ong_id = req.headers.authorization;

        const incidents = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        res.send({ incidents });
    },
    async destroy(req, res) {
        const { id } = req.params;
        const ong_id = req.headers.authorization;
        const incident = await connection("incidents").where({ 'id': id, 'ong_id': ong_id }).del();
        res.send({ incident });
    },

    async update(req, res) {
        const { id } = req.params;
        const { title, description, value } = req.body;
        const ong_id = req.headers.authorization;
        const incident = await connection("incidents").where({ 'id': id, 'ong_id': ong_id }).update({
            title,
            description,
            value,
            ong_id
        });
        res.send({ incident });

    }
}
