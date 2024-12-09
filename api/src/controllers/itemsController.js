const db = require("../database");

class ItemsController {
    async getAllItems(req, res) {
        await db.query("SELECT * FROM Item ORDER BY unit_price", (err, result) => {
            try {
                if (err) throw err;
                if (result.rowCount === 0) {
                    return res.status(404).json({NOTFOUND: "No item found"});
                }
                return res.status(200).json(result);
            } catch (err) {
                console.error(err);
                return res.status(500).json({ status: "error", message: "Error fetching items." })
            }
        });
    }

    async getItem(req, res) {
        let id = req.params.id;
        await db.query("SELECT * FROM Item WHERE item_id = $1", [id], (err, result) => {
            try {
                if (err) throw err;
                if (result.rowCount === 0) {
                    return res.status(404).json({NOTFOUND: "No item found"});
                }
                return res.status(200).json(result);
            } catch (err) {
                console.error(err);
                return res.status(500).json({ status: "error", message: "Error fetching items." })
            }
        });
    }

    async searchItemsByName(req, res) {
        let name = req.params.name;
        await db.query("SELECT * FROM Item WHERE model ILIKE $1 ORDER BY model", ['%'+name+'%'], (err, result) => {
            try {
                if (err) throw err;
                if (result.rowCount === 0) {
                    return res.status(404).json({NOTFOUND: "No item found"});
                }
                return res.status(200).json(result);
            } catch (err) {
                console.error(err);
                return res.status(500).json({ status: "error", message: "Error fetching items." })
            }
        });
    }

    async getItemsByCategoryId(req, res) {
        const categoryId = req.params.category;
        await db.query("SELECT * FROM Item JOIN Category ON Item.category_id = Category.category_id WHERE Item.category_id = $1 OR Category.parent_id = $1", [categoryId], (err, result) => {
            try {
                if (err) throw err;
                if (result.rowCount === 0) {
                    return res.status(404).json({NOTFOUND: "No item found"});
                }
                return res.status(200).json(result);
            } catch (err) {
                console.error(err);
                return res.status(500).json({ status: "error", message: "Error fetching items." })
            }
        });
    }

    async getItemsByManufacturer(req, res) {
        const manufacturer = req.params.manufacturer;
        await db.query("SELECT * FROM Item WHERE manufacturer = $1", [manufacturer], (err, result) => {
            try {
                if (err) throw err;
                if (result.rowCount === 0) {
                    return res.status(404).json({NOTFOUND: "No item found"});
                }
                return res.status(200).json(result);
            } catch (err) {
                console.error(err);
                return res.status(500).json({ status: "error", message: "Error fetching items." })
            }
        });
    }

    async getItemsByCategoryIdAndManufacturer(req, res) {
        const categoryId = req.params.category;
        const manufacturer = req.params.manufacturer;
        await db.query("SELECT * FROM Item JOIN Category ON Item.category_id = Category.category_id WHERE (Item.category_id = $1 OR Category.parent_id = $1) AND Item.manufacturer = $2", [categoryId, manufacturer], (err, result) => {
            try {
                if (err) throw err;
                if (result.rowCount === 0) {
                    return res.status(404).json({NOTFOUND: "No item found"});
                }
                return res.status(200).json(result);
            } catch (err) {
                console.error(err);
                return res.status(500).json({ status: "error", message: "Error fetching items." })
            }
        });
    }

    async getItemsBySupplierId(req, res) {
        const supplierId = req.params.supplierId;
        await db.query("SELECT * FROM Item JOIN SupplierItem ON SupplierItem.item_id = Item.item_id WHERE supplier_id = $1", [supplierId], (err, result) => {
            try {
                if (err) throw err;
                if (result.rowCount === 0) {
                    return res.status(404).json({NOTFOUND: "No item found"});
                }
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
