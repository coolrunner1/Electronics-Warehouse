const db = require("../database");

class ClientsController {
    async getAllClients(req, res) {
        await db.query("SELECT * FROM Client ORDER BY client_id ASC", (err, result) => {
            try {
                if (err) throw err;
                if (result.rowCount === 0) {
                    return res.status(404).json({NOTFOUND: "No clients found"});
                }
                return res.status(200).json(result);
            } catch (err) {
                console.error(err);
                return res.status(500).json({ status: "error", message: "Error fetching clients." })
            }
        });
    }

    async getClient(req, res) {
        const id = req.params.clientId;
        await db.query("SELECT * FROM Client WHERE client_id = $1", [id],
            (err, result) => {
            try {
                if (err) throw err;
                if (result.rowCount === 0) {
                    return res.status(404).json({NOTFOUND: "Client was not found"});
                }
                return res.status(200).json(result);
            } catch (err) {
                console.error(err);
                return res.status(500).json({ status: "error", message: "Error fetching clients." });
            }
        });
    }

    async addClient(req, res) {
        const body = req.body;
        await db.query("INSERT INTO Client (name, phone_number, address, email, city, region, country, postal_code) VALUES " +
            "($1, $2, $3, $4, $5, $6, $7, $8)", [body.name, body.phone_number, body.address, body.email, body.city, body.region, body.country, body.postal_code],
            (err, result) => {
            try {
                if (err) throw err;
                return res.status(201).json(result);
            } catch (e) {
                console.error(e);
                return res.status(500).json({ status: "error", message: "Error creating client" })
            }
        });
    }

    async updateClient(req, res) {
        const body = req.body;
        const id = req.params.clientId;
        await db.query("UPDATE Client SET name = $1, phone_number = $2, address = $3, email = $4, city = $5, region = $6, country = $7, postal_code = $8 " +
            "WHERE client_id = $9", [body.name, body.phone_number, body.address, body.email, body.city, body.region, body.country, body.postal_code, id],
            (err, result) => {
            try {
                if (err) throw err;
                if (result.rowCount === 0) {
                    return res.status(404).json({NOTFOUND: "Client was not found"});
                }
                return res.status(200).json(result);
            } catch (err) {
                console.error(err);
                return res.status(500).json({ status: "error", message: "Error updating client" });
            }
        });
    }
}

const clientsController = new ClientsController();
module.exports = clientsController;