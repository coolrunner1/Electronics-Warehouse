import prisma from "../../prisma/prisma-client";
import {calculateNumberOfPages, pagination} from "../utils/pagination";

class UsersService {
    async getAllUsers(page: number, limit: number) {

        const {skip, take} = pagination(page, limit);
        const [users, count] = await prisma.$transaction([
            prisma.userProfile.findMany({
                orderBy: {
                   user_id: 'desc'
                },
                skip,
                take
            }),
            prisma.userProfile.count()
        ]);

        return {
            pagination: {
                total: calculateNumberOfPages(count, limit),
            },
            data: users
        };
    }

    async getUser(id: number) {
        return prisma.userProfile.findUnique({
            where: {
                user_id: id,
            }
        })
    }

    /*async addUser(req, res) {
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
                    return res.status(200).json(result);
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
    }*/

    async deleteUserById(id: number){
        return prisma.userProfile.delete({
            where: { user_id: id },
        });
    }
}

export default new UsersService();