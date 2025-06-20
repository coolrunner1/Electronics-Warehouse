import {NextFunction, Request, Response} from "express";

class ReviewsController {
    async getReviews(req: Request, res: Response, next: NextFunction) {
        try {
            return res.status(502).json()
        } catch (e) {
            next(e)
        }
    }

    async getReview(req: Request, res: Response, next: NextFunction) {
        try {
            return res.status(502).json()
        } catch (e) {
            next(e)
        }
    }

    async createReview(req: Request, res: Response, next: NextFunction) {
        try {
            return res.status(502).json()
        } catch (e) {
            next(e)
        }
    }

    async deleteReview(req: Request, res: Response, next: NextFunction) {
        try {
            return res.status(502).json()
        } catch (e) {
            next(e)
        }
    }
}

export default new ReviewsController()