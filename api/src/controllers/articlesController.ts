import {Request, Response, NextFunction} from "express";
import articlesService from "../services/articlesService";

class ArticlesController {
    public async getArticles(req: Request, res: Response, next: NextFunction){
        try {
            const articles = await articlesService.getAllArticles(req.query);
            if (!articles.data.length) {
                return res.status(404).json({message: "No articles found"});
            }
            return res.status(200).json(articles);
        } catch (e) {
            next(e);
        }
    }

    public async getArticleById(req: Request, res: Response, next: NextFunction){
        try {
            const id = parseInt(req.params.id);
            if (!id) {
                return res.status(400).json({ status: "error", message: "Bad request" });
            }
            const article = await articlesService.getArticleById(id);
            if (!article) {
                return res.status(404).json({ status: "error", message: `No article with id ${id} found` });
            }
            return res.status(200).json(article);
        } catch (e) {
            next(e);
        }
    }

    public async addArticle(req: Request, res: Response, next: NextFunction){
        try {
            const result = await articlesService.createArticle(req.body);
            if (!result) throw new Error('Error adding article');
            return res.status(201).json(result);
        } catch (e) {
            next(e);
        }
    }

    public async updateArticle(req: Request, res: Response, next: NextFunction){
        try {
            const id = parseInt(req.params.id);

            if (!await articlesService.getArticleById(id)) {
                return res.status(404).json({ status: "error", message: "Article was not found" });
            }

            const result = await articlesService.updateArticle(req.body, id);
            if (!result) throw new Error('Error updating article');

            return res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }

    public async deleteArticle(req: Request, res: Response, next: NextFunction){
        try {
            const {id} = req.params;
            if (!parseInt(id)) {
                return res.status(400).json({ status: "error", message: "Bad request" });
            }
            const result = await articlesService.deleteArticle(Number(id));
            if (!result) {
                return res.status(404).json({ status: "error", message: "Article was not found." });
            }
            return res.status(204).json(result);
        } catch (e) {
            next(e);
        }
    }
}

export default new ArticlesController();