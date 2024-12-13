const db = require("../database");

class SuppliersController {
    async getSuppliers(req, res) {
        await db.query("SELECT * FROM Supplier ORDER BY supplier_id", (err, result) => {
            try {
                if (err) throw err;
                if (result.rowCount === 0) {
                    return res.status(404).json({NOTFOUND: "No suppliers found"});
                }
                return res.status(200).json(result);
            } catch (err) {
                return res.status(500).json({ status: "error", message: "Error fetching suppliers." })
            }
        })
    }
}

const suppliersController = new SuppliersController();
module.exports = suppliersController;