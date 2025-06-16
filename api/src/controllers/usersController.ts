import { NextFunction, Request, Response } from 'express';
import usersService from "../services/usersService";
require("dotenv").config();

class UsersController {
    async getAllUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await usersService.getAllUsers(req.query);
            if (!users) {
                return res.status(404).json({message: "No users found"});
            }
            return res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    }

    async getUser(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            if (!id) {
                return res.status(400).json({ status: "error", message: "Bad request" });
            }
            const user = await usersService.getUserById(id);
            if (!user) {
                return res.status(404).json({ status: "error", message: `No user with id ${id} found` });
            }
            return res.status(200).json(user);
        } catch (error) {
            console.error(error);
            next(error);
        }
        return
    }

    async addUser(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await usersService.createUser(req.body);
            if (!user) {
                return res.status(400).json({ status: "error", message: "Bad request" });
            }
            return res.status(200).json(user);
        } catch (error) {
            if (error.code === 'P2002') {
                return res.status(400).json({ status: "error", message: "Unique constraint violation!\nLogin, email, passport and phone number must be unique!" });
            }
            next(error);
        }
    }

    async updateUser(req: Request, res: Response, next: NextFunction){
        try {
            const result = await usersService.updateUser(req.body, parseInt(req.params.id));
            if (!result) {
                return res.status(404).json({ status: "error", message: "User was not found." });
            }
            return res.status(200).json(result);
        } catch (error) {
            if (error.code === 'P2002') {
                return res.status(400).json({ status: "error", message: "Unique constraint violation!\nLogin, email, passport and phone number must be unique!" });
            }
            next(error);
        }
    }

    async deleteUserById(req: Request, res: Response, next: NextFunction){
            try {
                const {id} = req.params;
                if (!parseInt(id)) {
                    return res.status(400).json({ status: "error", message: "Bad request" });
                }
                const result = await usersService.deleteUserById(Number(id));
                if (!result) {
                    return res.status(404).json({ status: "error", message: "User was not found." });
                }
                return res.status(204).json(result);
            } catch (error) {
                next(error);
            }
    }
}

export default new UsersController();
