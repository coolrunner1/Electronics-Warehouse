const db = require("../database");

class EnumsController {
    async getReturnStatuses(req, res) {
        await db.query("SELECT UNNEST(enum_range(null, null::return_status))", (err, result) => {
            try {
                if (err) throw err;
                if (result.rowCount === 0) {
                    return res.status(404).json({NOTFOUND: "No statuses found"});
                }
                return res.status(200).json(result);
            } catch (err) {
                console.error(err);
                return res.status(500).json({ status: "error", message: "Error fetching statuses." });
            }
        });
    }

    async getReturnReasons(req, res) {
        await db.query("SELECT UNNEST(enum_range(null, null::return_reason))", (err, result) => {
            try {
                if (err) throw err;
                if (result.rowCount === 0) {
                    return res.status(404).json({NOTFOUND: "No reasons found"});
                }
                return res.status(200).json(result);
            } catch (err) {
                console.error(err);
                return res.status(500).json({ status: "error", message: "Error fetching reasons." });
            }
        });
    }
}

const enumsController = new EnumsController();
module.exports = enumsController;
