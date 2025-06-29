import { NextFunction, Request, Response } from 'express';
import clientsService from "../services/clientsService";

class ClientsController {
    async getAllClients(req: Request, res: Response, next: NextFunction) {
        try {
            const clients = await clientsService.getAllClients(req.query);
            res.status(200).json(clients);
        } catch (error) {
            next(error);
        }
    }

    async getClient(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            if (!id) {
                res.status(400).json({ status: "error", message: "Invalid client id" });
            }
            const client = await clientsService.getClient(id);
            if (!client) {
                res.status(404).json({status: "error", message: "Client was not found"});
            }
            res.status(200).json(client);
        } catch (error) {
            next(error);
        }
    }

    async getMyClient(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt((req.user as any).clientId);
            if (!id) {
                res.status(400).json({ status: "error", message: "Invalid client id" });
            }
            const client = await clientsService.getClient(id);
            if (!client) {
                res.status(404).json({status: "error", message: "Client was not found"});
            }
            res.status(200).json(client);
        } catch (error) {
            next(error);
        }
    }

    async addClient(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await clientsService.addClient(req.body);
            if (!result) throw new Error('Error adding client');
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }

    async updateClient(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await clientsService.updateClient(req.body, parseInt(req.params.id));
            if (!result) {
                res.status(404).json({NOTFOUND: "Client was not found"});
            }
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    async updateMyClient(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await clientsService.updateClient(req.body, parseInt((req.user as any).clientId));
            if (!result) {
                res.status(404).json({NOTFOUND: "Client was not found"});
            }
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}

export default new ClientsController();