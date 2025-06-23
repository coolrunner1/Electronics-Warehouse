import {NextFunction, Request, Response} from "express";
import enumsService from "../services/enumsService";

class EnumsController {
    async getReturnStatuses(req: Request, res: Response, next: NextFunction) {
        try {
            const statuses = await enumsService.getReturnStatuses();
            if (!statuses) {
                res.status(404).json({ status: "error", message: "Error fetching statuses." });
            }
            res.status(200).json(statuses);
        } catch (error) {
            next(error);
        }
    }

    async getReturnReasons(req: Request, res: Response, next: NextFunction) {
        try {
            const reasons = await enumsService.getReturnReasons();
            if (!reasons) {
                res.status(404).json({ status: "error", message: "Error fetching reasons." });
            }
            res.status(200).json(reasons);
        } catch (error) {
            next(error);
        }
    }

    async getOrderStatuses(req: Request, res: Response, next: NextFunction) {
        try {
            const statuses = await enumsService.getOrderStatuses();
            if (!statuses) {
                res.status(404).json({ status: "error", message: "Error fetching statuses." });
            }
            res.status(200).json(statuses);
        } catch (error) {
            next(error);
        }
    }
}

export default new EnumsController();