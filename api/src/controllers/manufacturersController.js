const db = require("../database");

class ManufacturerController {
    async getAllManufacturers(req, res) {
        await db.query("SELECT DISTINCT(manufacturer) FROM Item", (err, result) => {
            try {
                if (err) throw err;
                if (result.rowCount === 0) {
                    return res.status(404).json({NOTFOUND: "No manufacturers found"});
                }
                return res.status(200).json(result);
            } catch (err) {
                console.error(err);
                return res.status(500).json({ status: "error", message: "Error fetching manufacturers." })
            }
        });
    }
}

const manufacturerController = new ManufacturerController();
module.exports = manufacturerController;
