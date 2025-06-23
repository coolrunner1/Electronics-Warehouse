import {Router} from "express";
import {checkAuth} from "../middlewares/authMiddleware";
import reviewsController from "../controllers/reviewsController";

const reviewsRouter = Router();

reviewsRouter.get("/items/:id/reviews", reviewsController.getReviews);
reviewsRouter.post("/items/:id/reviews", checkAuth(), reviewsController.createReview);
reviewsRouter.get("/reviews/:id", checkAuth(), reviewsController.getReview);
reviewsRouter.delete("/reviews/:id", checkAuth(), reviewsController.deleteReview);

export default reviewsRouter;