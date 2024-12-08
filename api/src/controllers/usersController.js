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
                return res.status(500).json({ status: "error", message: "Error fetching users." })
            }
        });
    }

    async addUser(req, res) {
            const body = req.body;

            if (body.client_id === 0) {
                body.client_id = null;
            }

            await db.query("INSERT INTO UserProfile (login, password, full_name, email, phone_number, passport, role_id, client_id) VALUES " +
                "($1, $2, $3, $4, $5, $6, $7, $8)",
                [body.login, body.password, body.full_name, body.email, body.phone_number, body.passport, body.role_id, body.client_id],
                (err, result) => {
                try {
                    if (err) throw err;
                    return res.status(200).json(result);
                } catch (error) {
                    console.error(error);
                    if (error.code === '23505') {
                        return res.status(409).json({ status: "error", message: "User with this login or email already exists." });
                    }
                    return res.status(500).json({ status: "error", message: "Server error." });
                }
            })

    }

    async updateUser(req, res){
            const id = req.params.userId;
            const body = req.body;

            if (body.client_id === 0) {
                body.client_id = null;
            }

            await db.query("UPDATE UserProfile SET login = $2, password = $3, full_name = $4, email = $5, phone_number = $6, passport = $7, role_id = $8, client_id = $9 WHERE user_id = $1",
                [id, body.login, body.password, body.full_name, body.email, body.phone_number, body.passport, body.role_id, body.client_id],
                (err, result) => {
                    try {
                        if (err) throw err;
                        if (result.rowCount === 0) {
                            return res.status(404).json({NOTFOUND: "No users found"});
                        }
                        return res.status(201).json(result);
                    } catch (error) {
                        console.error(error);
                        if (error.code === '23505') {
                            return res.status(409).json({
                                status: "error",
                                message: "User with this login or email already exists."
                            });
                        }
                        return res.status(500).json({status: "error", message: "Server error."});
                    }
                });
    }

    async deleteUserById(req, res){
            const id = req.params.userId;
            await db.query(`DELETE FROM UserProfile WHERE user_id = $1`, [id], (err, result) => {
                try{
                    if (err) throw err;
                    if (result.rowCount === 0) {
                        return res.status(404).json({NOTFOUND: "No users found"});
                    }
                    return res.status(202).json(result);
                } catch (error) {
                    return res.status(500).json({ status: "error", message: "Server error." })
                }
            });
    }
}

const usersController = new UsersController();
module.exports = usersController;
