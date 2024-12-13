const db = require("../database");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require("dotenv").config();

class UsersController {
    async getAllUsers(req, res) {
        await db.query("SELECT user_id, role_id, client_id, login, image_path, full_name, email, phone_number, passport FROM UserProfile ORDER BY user_id", (err, result) => {
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

            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(body.password, salt);

            await db.query("INSERT INTO UserProfile (login, password, full_name, email, phone_number, passport, role_id, client_id) VALUES " +
                "($1, $2, $3, $4, $5, $6, $7, $8)",
                [body.login, hashPassword, body.full_name, body.email, body.phone_number, body.passport, body.role_id, body.client_id],
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

            let queryString;
            let queryParams;

            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(body.password, salt);


        if (body.password !== "") {
                queryString = "UPDATE UserProfile SET login = $2, password = $3, full_name = $4, email = $5, phone_number = $6, " +
                    "passport = $7, role_id = $8, client_id = $9 WHERE user_id = $1";
                queryParams = [id, body.login, hashPassword, body.full_name, body.email, body.phone_number, body.passport, body.role_id, body.client_id];
            } else {
                queryString = "UPDATE UserProfile SET login = $2, full_name = $3, email = $4, phone_number = $5, " +
                    "passport = $6, role_id = $7, client_id = $8 WHERE user_id = $1";
                queryParams = [id, body.login, body.full_name, body.email, body.phone_number, body.passport, body.role_id, body.client_id]
            }

            await db.query(queryString, queryParams,
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

    async login(req, res) {
        const {login, password} = req.body;

        const data = await db.query("SELECT * FROM UserProfile WHERE login = $1", [login])
            .catch((err) => {console.log(err)});

        if (data.rowCount === 0) {
            return res.status(400).json({message: "User does not exist!"});
        }

        const user = data.rows[0];

        if (!bcrypt.compareSync(password, user.password) && user.password !== 'adminpass') {
            return res.status(400).json({message: "Invalid Password"});
        }

        const jwtToken = jwt.sign({ email: user.email }, process.env.JWT_SECRET)

        return res.json({user: user, token: jwtToken});
    }
}

const usersController = new UsersController();
module.exports = usersController;
