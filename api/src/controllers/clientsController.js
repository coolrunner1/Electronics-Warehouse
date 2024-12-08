const db = require("../database");

class ClientsController {
    async getAllClients(req, res) {
        await db.query("SELECT * FROM Client", (err, result) => {
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
}

const clientsController = new ClientsController();
module.exports = clientsController;