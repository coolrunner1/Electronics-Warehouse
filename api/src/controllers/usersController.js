const db = require("../database");

class UsersController {
    async getAllUsers(req, res) {
        await db.query("SELECT * FROM UserProfile", (err, result) => {
            try {
                if (err) throw err;
                if (result.rowCount === 0) {
                    return res.status(404).json({NOTFOUND: "No users found"});
                }
                return res.status(200).json(result);
            } catch (err) {
                console.error(err);
                return res.status(500).json({ status: "error", message: "Error fetching users." })
            }
        });
    }
}

const usersController = new UsersController();
module.exports = usersController;
