import { NextFunction, Request, Response } from 'express';
import suppliersService from "../services/suppliersService";

class SuppliersController {
    async getSuppliers(req: Request, res: Response, next: NextFunction) {
        try {
            const {page, limit} = req.query;
            const clients = await suppliersService.getAllSuppliers(Number(page), Number(limit), limit === 'none');
            if (!clients.data.length) {
                return res.status(404).json({ status: "error", message: "No suppliers found" });
            }
            res.status(200).json(clients);
        } catch (error) {
            next(error);
        }
    }

    async addSupplier(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await suppliersService.addSupplier(req.body);
            if (!result) throw new Error('Error adding supplier.');
            return res.status(201).json(result);
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async updateSupplier(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await suppliersService.updateSupplier(req.body, parseInt(req.params.id));
            if (!result) {
                return res.status(404).json({NOTFOUND: "Supplier was not found"});
            }
            return res.status(200).json(result);
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
}

export default new SuppliersController();