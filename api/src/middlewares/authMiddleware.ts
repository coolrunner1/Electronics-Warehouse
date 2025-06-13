import {Request, Response, NextFunction} from "express";
import * as jwt from 'jsonwebtoken';
import {JwtPayload} from "jsonwebtoken";
import {ADMIN_ROLE} from "../constants/roles";

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    console.log(token);

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
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        console.log(token);

        if (!token) {
            res.status(401).json({message: 'No token provided'});
            return;
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
            console.log(decoded.role)
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
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        const userId = parseInt(req.params.id);

        if (!token) {
            res.status(401).json({message: 'No token provided'});
            return;
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
            console.log(userId)
            console.log(decoded.userId)
            if (Number(decoded.id) !== ADMIN_ROLE && userId !== Number(decoded.id)) {
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