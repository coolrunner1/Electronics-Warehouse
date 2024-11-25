const db = require("../database");

class ItemsController {
    async getAllItems(req, res) {
        await db.query("SELECT * FROM Item", (err, result) => {
            try {
                if (err) throw err;
                return res.status(200).json(result);
            } catch (err) {
                console.error(err);
                return res.status(500).json({ status: "error", message: "Error fetching items." })
            }
        });
    }
}

const itemsController = new ItemsController();
module.exports = itemsController;
