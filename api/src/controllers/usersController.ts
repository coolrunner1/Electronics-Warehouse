import { NextFunction, Request, Response } from 'express';
import usersService from "../services/usersService";
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
require("dotenv").config();

class UsersController {
    async getAllUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await usersService.getAllUsers(req.query);
            if (!users) {
                res.status(404).json({message: "No users found"});
            }
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    }

    async getUser(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            if (!id) {
                res.status(400).json({ status: "error", message: "Bad request" });
            }
            const user = await usersService.getUserById(id);
            if (!user) {
                res.status(404).json({ status: "error", message: `No user with id ${id} found` });
            }
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    async getMyUser(req: Request, res: Response, next: NextFunction) {
        try {
            if (!req.user) {
                res.status(400).json({ status: "error", message: "Bad request" });
            }
            const id = parseInt((req.user as any).id);
            const user = await usersService.getUserById(id);
            if (!user) {
                res.status(404).json({ status: "error", message: `No user with id ${id} found` });
            }
            res.status(200).json(user);
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async addUser(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await usersService.createUser(req.body);
            if (!user) {
                res.status(400).json({ status: "error", message: "Bad request" });
            }
            res.status(200).json(user);
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    res.status(400).json({ status: "error", message: "Unique constraint violation!\nLogin, email, passport and phone number must be unique!" });
                }
            }
            next(error);
        }
    }

    async updateUser(req: Request, res: Response, next: NextFunction){
        try {
            const result = await usersService.updateUser(req.body, parseInt(req.params.id));
            if (!result) {
                res.status(404).json({ status: "error", message: "User was not found." });
            }
            res.status(200).json(result);
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    res.status(400).json({ status: "error", message: "Unique constraint violation!\nLogin, email, passport and phone number must be unique!" });
                }
            }
            next(error);
        }
    }

    async patchUser(req: Request, res: Response, next: NextFunction){
        try {
            const result = await usersService.patchUser(req.body, parseInt(req.params.id));
            if (!result) {
                res.status(404).json({ status: "error", message: "User was not found." });
            }
            res.status(200).json(result);
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    res.status(400).json({ status: "error", message: "Unique constraint violation!\nLogin, email, passport and phone number must be unique!" });
                }
            }
            next(error);
        }
    }

    async patchMyUser(req: Request, res: Response, next: NextFunction){
        try {
            if (!req.user) {
                res.status(400).json({ status: "error", message: "Bad request" });
            }
            const result = await usersService.patchUser(req.body, parseInt((req.user as any).id));
            if (!result) {
                res.status(404).json({ status: "error", message: "User was not found." });
            }
            res.status(200).json(result);
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    res.status(400).json({ status: "error", message: "Unique constraint violation!\nLogin, email, passport and phone number must be unique!" });
                }
            }
            next(error);
        }
    }

    async updateUserPassword(req: Request, res: Response, next: NextFunction){
        try {
            const result = await usersService.updateUserPassword(req.body, parseInt(req.params.id));
            if (!result) {
                res.status(404).json({ status: "error", message: "User was not found." });
            }
            res.status(200).json(result);
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    res.status(400).json({ status: "error", message: "Unique constraint violation!\nLogin, email, passport and phone number must be unique!" });
                }
            }
            next(error);
        }
    }

    async updateMyPassword(req: Request, res: Response, next: NextFunction){
        try {
            if (!req.user) {
                res.status(400).json({ status: "error", message: "Bad request" });
            }
            const result = await usersService.updateUserPassword(req.body, parseInt((req.user as any).id));
            if (!result) {
                res.status(404).json({ status: "error", message: "User was not found." });
            }
            res.status(200).json(result);
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    res.status(400).json({ status: "error", message: "Unique constraint violation!\nLogin, email, passport and phone number must be unique!" });
                }
            }
            next(error);
        }
    }

    async deleteUserById(req: Request, res: Response, next: NextFunction){
            try {
                const {id} = req.params;
                if (!parseInt(id)) {
                    res.status(400).json({ status: "error", message: "Bad request" });
                }
                const result = await usersService.deleteUserById(Number(id));
                if (!result) {
                    res.status(404).json({ status: "error", message: "User was not found." });
                }
                res.status(204).json(result);
            } catch (error) {
                next(error);
            }
    }
}

export default new UsersController();
