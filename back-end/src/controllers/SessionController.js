const connection = require("../database/connection");

module.exports = {

    async create(req, res) {

        const { id } = req.body;

        const ong = await connection("ongs")
            .where({ "id": id })
            .select("name")
            .first();
        console.log(ong);

        if (!ong) {
            return res.status(400).send({ error: "Ong not exists." });
        }
        return res.status(200).send({ ong });

    }

}