import {Request, Response, NextFunction} from "express";
import * as jwt from 'jsonwebtoken';
import {JwtPayload} from "jsonwebtoken";
import {ADMIN_ROLE} from "../constants/roles";
import {cookieToJSON} from "../utils/cookieToJSON";

export const checkAuth = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const token = cookieToJSON(req.headers['cookie'] as string)._auth;

        if (!token) {
            res.status(401).json({message: 'No token provided'});
        }

        try {
            req.user = jwt.verify(token, process.env.JWT_SECRET as string) as any;
            next();
        } catch (error) {
            res.status(401).json({message: 'Invalid token'});
        }
    }
}

export const checkAuthWithRole = (roleId: number) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const token = cookieToJSON(req.headers['cookie'] as string)._auth;

        if (!token) {
            res.status(401).json({message: 'No token provided'});
            return;
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
            if (roleId !== Number(decoded.role) && Number(decoded.role) !== ADMIN_ROLE) {
                res.status(403).json({message: 'Unauthorized'});
                return;
            }
            next();
        } catch (error) {
            res.status(401).json({message: 'Invalid token'});
            return;
        }
    }
}