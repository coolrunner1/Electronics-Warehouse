import {Request, Response, NextFunction} from "express";
import * as jwt from 'jsonwebtoken';
import {JwtPayload} from "jsonwebtoken";
import {ADMIN_ROLE, USER_ROLE} from "../constants/roles";
import {cookieToJSON} from "../utils/cookieToJSON";

export const checkAuth = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
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
            if (Number(decoded.role) !== ADMIN_ROLE && clientId !== Number(decoded.clientId)) {
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

/*Allows operation for user with provided client id param or role id param and for admins.*/
export const checkAuthWithClientIdOrRoleId = (roleId: number) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const token = cookieToJSON(req.headers['cookie'])._auth;
        const clientId = parseInt(req.params.id);

        if (!token) {
            res.status(401).json({message: 'No token provided'});
            return;
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
            if (Number(decoded.role) !== ADMIN_ROLE && clientId !== Number(decoded.clientId) && roleId !== Number(decoded.role)) {
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

export const checkClientIdAuthenticityInBody = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const token = cookieToJSON(req.headers['cookie'])._auth;
        const clientId = parseInt(req.body.client_id);

        if (!clientId) {
            next();
            return;
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
            if (Number(decoded.id) === USER_ROLE && clientId !== Number(decoded.clientId)) {
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