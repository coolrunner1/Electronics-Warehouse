import {Request, Response, NextFunction} from "express";
import * as jwt from 'jsonwebtoken';
import {JwtPayload} from "jsonwebtoken";
import {ADMIN_ROLE} from "../constants/roles";
import {cookieToJSON} from "../utils/cookieToJSON";

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
    const token = cookieToJSON(req.headers['cookie'])._auth;

    if (!token) {
        res.status(401).json({message: 'No token provided'});
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        res.status(401).json({message: 'Invalid token'});
    }
}

export const checkAuthWithRole = (roleId: number) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const token = cookieToJSON(req.headers['cookie'])._auth;

        if (!token) {
            res.status(401).json({message: 'No token provided'});
            return;
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
            if (roleId !== Number(decoded.role)) {
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

/*Allows operation for user with provided user id param and for admins.*/
export const checkAuthWithUserId = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const token = cookieToJSON(req.headers['cookie'])._auth;
        const userId = parseInt(req.params.id);

        if (!token) {
            res.status(401).json({message: 'No token provided'});
            return;
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
            if (Number(decoded.role) !== ADMIN_ROLE && userId !== Number(decoded.id)) {
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

/*Allows operation for user with provided client id param and for admins.*/
export const checkAuthWithClientId = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const token = cookieToJSON(req.headers['cookie'])._auth;
        const clientId = parseInt(req.params.id);

        if (!token) {
            res.status(401).json({message: 'No token provided'});
            return;
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
            if (Number(decoded.id) !== ADMIN_ROLE && clientId !== Number(decoded.clientId)) {
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