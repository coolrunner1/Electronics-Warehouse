import rolesService from "../services/rolesService";
import {NextFunction, Request, Response} from "express";

class RolesController {
    async getAllRoles(req: Request, res: Response, next: NextFunction) {
        try {
            const roles = await rolesService.getAllRoles();
            if (!roles) {
                return res.status(404).json({NOTFOUND: "No roles found"});
            }
            return res.status(200).json(roles);
        } catch (err) {
            next(err);
        }
    }
}

export default new RolesController();