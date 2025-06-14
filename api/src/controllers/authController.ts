import {Request, Response, NextFunction} from "express";
import authService from "../services/authService";

class AuthController {
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { login, password } = req.body;
            const user = await authService.login(login, password);
            return res.status(200).json(user);
        } catch (e) {
            if (e.message === "Invalid credentials") {
                return res.status(400).json({message: e.message});
            }
            next(e);
        }
    }

    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await authService.register(req.body);
            return res.json(user);
        } catch (e) {
            if (e.code === 'P2002') {
                return res.status(400).json({ status: "error", message: "Unique constraint violation!\nLogin, email, passport and phone number must be unique!" });
            }
            next(e);
        }
    }
}

export default new AuthController();