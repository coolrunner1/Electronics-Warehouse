const db = require("../database");

class CategoriesController {
    async getAllCategories(req, res) {
        await db.query("SELECT * FROM Category ORDER BY category_id", (err, result) => {
            try {
                if (err) throw err;
                if (result.rowCount === 0) {
                    return res.status(404).json({NOTFOUND: "No categories found"});
                }
                return res.status(200).json(result);
            } catch (err) {
                console.error(err);
                return res.status(500).json({ status: "error", message: "Error fetching categories." })
            }
        });
    }
}

const categoriesController = new CategoriesController();
module.exports = categoriesController;
