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

    async getItemsByOrderId(req, res){
        const id = req.params.orderId;
        await db.query("SELECT Item.item_id, Item.model, Item.image_path, Item.manufacturer, Item.unit_price, OrderProduct.quantity, OrderProduct.returned_units, order_id, order_product_id " +
            "FROM Item JOIN OrderProduct ON Item.item_id = OrderProduct.item_id WHERE OrderProduct.order_id = $1", [id], (err, result) => {
            try {
                if (err) throw err;
                if (result.rowCount === 0) {
                    return res.status(404).json({NOTFOUND: "No items found"});
                }
                return res.status(200).json(result);
            } catch (error) {
                console.error(error);
                return res.status(500).json({ status: "error", message: "Error fetching items." })
            }
        })
    }

    async addItem(req, res) {
        const body = req.body;
        console.log(body);
        await db.query("INSERT INTO Item (category_id, model, status, manufacturer, unit_price, date_of_arrival, units_in_stock, faulty_units) VALUES \n" +
            "($1, $2, 'Out Of Stock', $3, $4, CURRENT_TIMESTAMP, 0, 0)", [body.category_id, body.model, body.manufacturer, body.unit_price], (err, result) => {
            try {
                if (err) throw err;
                return res.status(200).json(result);
            } catch (err) {
                console.error(err);
                return res.status(500).json({ status: "error", message: "Error adding item" })
            }
        });
    }

    async updateItem(req, res) {
        const body = req.body;
        const id = req.params.id;
        await db.query("UPDATE Item SET category_id = $1, manufacturer = $2, model = $3, unit_price = $4 WHERE item_id = $5",
            [body.category_id, body.manufacturer, body.model, body.unit_price, id], (err, result) => {
            try {
                if (err) throw err;
                if (result.rowCount === 0) {
                    return res.status(404).json({NOTFOUND: "Item was not found"});
                }
                return res.status(201).json(result);
            } catch (err) {
                console.error(err);
                return res.status(500).json({ status: "error", message: "Error updating item" });
            }
        })
    }

    async addNewArrival(req, res) {
        try {
            const body = req.body;
            const id = req.params.id;
            await db.query("UPDATE Item SET units_in_stock = units_in_stock + $1 WHERE item_id = $2",
                [body.newQuantity, id]).then(await db.query("INSERT INTO SupplierItem (supplier_id, item_id) VALUES ($1, $2)",
                [body.supplierId, id]));

            return res.status(200).json(result);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ status: "error", message: "Error updating item" });
        }

    }
}

const itemsController = new ItemsController();
module.exports = itemsController;
