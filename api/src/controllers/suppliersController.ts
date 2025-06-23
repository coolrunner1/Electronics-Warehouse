import { NextFunction, Request, Response } from 'express';
import suppliersService from "../services/suppliersService";

class SuppliersController {
    async getSuppliers(req: Request, res: Response, next: NextFunction) {
        try {
            const suppliers = await suppliersService.getAllSuppliers(req.query);
            res.status(200).json(suppliers);
        } catch (error) {
            next(error);
        }
    }

    async addSupplier(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await suppliersService.addSupplier(req.body);
            if (!result) throw new Error('Error adding supplier.');
            res.status(201).json(result);
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async updateSupplier(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await suppliersService.updateSupplier(req.body, parseInt(req.params.id));
            if (!result) {
                res.status(404).json({ status: "error", message: "Supplier was not found." });
            }
            res.status(200).json(result);
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
}

export default new SuppliersController();