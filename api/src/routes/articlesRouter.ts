import {Router} from "express";
import articlesController from "../controllers/articlesController";
import {checkAuthWithRole} from "../middlewares/authMiddleware";
import {ADMIN_ROLE} from "../constants/roles";
import {validateData} from "../middlewares/validationMiddleware";
import {ArticleSchema} from "../schemas/articleSchemas";

const articlesRouter = Router();

articlesRouter.get('/', articlesController.getArticles);
articlesRouter.get('/:id', articlesController.getArticleById);
articlesRouter.post('/', checkAuthWithRole(ADMIN_ROLE), validateData(ArticleSchema), articlesController.addArticle);
articlesRouter.put('/:id', checkAuthWithRole(ADMIN_ROLE), validateData(ArticleSchema), articlesController.updateArticle);
articlesRouter.delete('/:id', checkAuthWithRole(ADMIN_ROLE), articlesController.deleteArticle);

export default articlesRouter;