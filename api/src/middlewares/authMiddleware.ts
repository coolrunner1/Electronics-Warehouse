import {Request, Response, NextFunction} from "express";
import * as jwt from 'jsonwebtoken';
import {JwtPayload} from "jsonwebtoken";

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

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

/*Has not been tested.*/
export const checkAuthWithRoleAndUserId = (roleId: number) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        const userId = req.body.id;

        if (!token) {
            res.status(401).json({message: 'No token provided'});
            return;
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
            if (roleId === 3 && userId !== Number(decoded.userId)) {
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