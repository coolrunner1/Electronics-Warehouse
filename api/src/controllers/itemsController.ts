import { NextFunction, Request, Response } from 'express';
import itemsService from "../services/itemsService";
import categoriesService from "../services/categoriesService";

class ItemsController {
    async getAllItems(req: Request, res: Response, next: NextFunction) {
        try {
            const items = await itemsService.getAllItems(req.query);
            if (!items) {
                return res.status(404).json({ status: "error", message: "No items found" });
            }
            return res.status(200).json(items);
        } catch (error) {
            console.error(error);
            return next(error);
        }
    }

    async getItem(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            if (!id) {
                return res.status(400).json({ status: "error", message: "Bad request" });
            }
            const item = await itemsService.getItemById(id);
            if (!item) {
                return res.status(404).json({ status: "error", message: `No item with id ${id} found` });
            }
            return res.status(200).json(item);
        } catch (error) {
            console.error(error);
            return next(error);
        }
    }

    async getItemManufacturers(req: Request, res: Response, next: NextFunction) {
        try {
            const manufacturers = await itemsService.getItemManufacturers();
            if (!manufacturers) {
                return res.status(404).json({ status: "error", message: "No manufacturers found" });
            }
            return res.status(200).json(manufacturers);
        } catch (error) {
            next(error);
        }
    }

    async addItem(req: Request, res: Response, next: NextFunction) {
        try {
            if (!await categoriesService.getCategoryById(parseInt(req.body.category_id))) {
                return res.status(400).json({ status: "error", message: "Bad request. Category by id "+req.body.category_id+" does not exist" });
            }
            const result = await itemsService.createItem(req.body);
            if (!result) throw new Error('Error adding item');
            return res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }

    async updateItem(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);

            if (!await itemsService.getItemById(id)) {
                return res.status(404).json({ status: "error", message: "Item was not found" });
            }

            if (!await categoriesService.getCategoryById(parseInt(req.body.category_id))) {
                return res.status(400).json({ status: "error", message: "Bad request. Category by id "+req.body.category_id+" does not exist" });
            }

            const result = await itemsService.updateItem(req.body, id);
            if (!result) throw new Error('Error updating item');

            return res.status(200).json(result);
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async addNewArrival(req: Request, res: Response, next: NextFunction) {
        return res.status(501).json({NOT_IMPLEMENTED: 'not implemented'});
        /*try {
            const body = req.body;
            const id = req.params.id;
            await db.query("UPDATE Item SET date_of_arrival = CURRENT_TIMESTAMP, units_in_stock = units_in_stock + $1 WHERE item_id = $2",
                [body.newQuantity, id], (err, result) => {
                if (err) throw err;
                if (result.rowCount === 0) {
                    return res.status(404).json({NOTFOUND: "Item was not found"});
                }
                });

            await db.query("INSERT INTO SupplierItem (supplier_id, item_id) VALUES ($1, $2)", [body.supplierId, id], (err, result) => {
                if (err) throw err;
            })

            return res.status(201).json({status: "success", message: "Arrival was created successfully"});
        } catch (err) {
            console.error(err);
            return res.status(500).json({ status: "error", message: "Error updating item" });
        }*/

    }
}

const itemsController = new ItemsController();
export default itemsController;
