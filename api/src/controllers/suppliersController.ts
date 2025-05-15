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

    async addSupplier(req, res) {
        const body = req.body;
        await db.query("INSERT INTO Supplier (name, phone_number, address, email, city, region, country, postal_code) VALUES " +
            "($1, $2, $3, $4, $5, $6, $7, $8)", [body.name, body.phone_number, body.address, body.email, body.city, body.region, body.country, body.postal_code],
            (err, result) => {
                try {
                    if (err) throw err;
                    return res.status(201).json(result);
                } catch (e) {
                    console.error(e);
                    return res.status(500).json({ status: "error", message: "Error creating supplier" })
                }
            });
    }

    async updateSupplier(req, res) {
        const body = req.body;
        const id = req.params.supplierId;
        await db.query("UPDATE Supplier SET name = $1, phone_number = $2, address = $3, email = $4, city = $5, region = $6, country = $7, postal_code = $8 " +
            "WHERE supplier_id = $9", [body.name, body.phone_number, body.address, body.email, body.city, body.region, body.country, body.postal_code, id],
            (err, result) => {
                try {
                    if (err) throw err;
                    if (result.rowCount === 0) {
                        return res.status(404).json({NOTFOUND: "Supplier was not found"});
                    }
                    return res.status(200).json(result);
                } catch (err) {
                    console.error(err);
                    return res.status(500).json({status: "error", message: "Error updating supplier"});
                }
            });
    }
}

const suppliersController = new SuppliersController();
module.exports = suppliersController;