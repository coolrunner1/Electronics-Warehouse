import {Router} from "express";
import {checkAuth, checkAuthWithClientIdOrRoleId, checkClientIdAuthenticityInBody} from "../middlewares/authMiddleware";
import reviewsController from "../controllers/reviewsController";

const reviewsRouter = Router();

reviewsRouter.get("/items/:id/reviews", reviewsController.getReviews.bind(reviewsController));
reviewsRouter.post("/items/:id/reviews", checkAuth(), checkClientIdAuthenticityInBody(), reviewsController.createReview.bind(reviewsController));
reviewsRouter.get("/reviews/:id", checkAuth(), reviewsController.getReview.bind(reviewsController));
reviewsRouter.delete("/reviews/:id", checkAuth(), checkClientIdAuthenticityInBody(), reviewsController.deleteReview.bind(reviewsController));

export default reviewsRouter;