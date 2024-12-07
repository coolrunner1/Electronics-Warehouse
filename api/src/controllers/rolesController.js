const db = require("../database");

class RolesController {
    async getAllRoles(req, res) {
        await db.query("SELECT * FROM Role", (err, result) => {
            try {
                if (err) throw err;
                if (result.rowCount === 0) {
                    return res.status(404).json({NOTFOUND: "No roles found"});
                }
                return res.status(200).json(result);
            } catch (err) {
                console.error(err);
                return res.status(500).json({ status: "error", message: "Error fetching roles." })
            }
        });
    }
}

const rolesController = new RolesController();
module.exports = rolesController;