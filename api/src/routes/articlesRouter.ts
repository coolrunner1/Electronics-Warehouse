import {Router} from "express";
import articlesController from "../controllers/articlesController";
import {checkAuthWithRole} from "../middlewares/authMiddleware";
import {ADMIN_ROLE} from "../constants/roles";
import {validateData} from "../middlewares/validationMiddleware";
import {articleSchema} from "../schemas/articleSchemas";

const articlesRouter = Router();

articlesRouter.get('/', articlesController.getArticles.bind(articlesController));
articlesRouter.get('/:id', articlesController.getArticleById.bind(articlesController));
articlesRouter.post('/', checkAuthWithRole(ADMIN_ROLE), validateData(articleSchema), articlesController.addArticle.bind(articlesController));
articlesRouter.put('/:id', checkAuthWithRole(ADMIN_ROLE), validateData(articleSchema), articlesController.updateArticle.bind(articlesController));
articlesRouter.delete('/:id', checkAuthWithRole(ADMIN_ROLE), articlesController.deleteArticle.bind(articlesController));

export default articlesRouter;