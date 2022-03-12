import { Request, Response } from "express";
import CategoryService from '../../domain/category/service'

class CategoryController {
    async create (req: Request, res: Response) {
        try {
            const data = await CategoryService.create(req.body);
            res.status(201).json(data);
        } catch (error: any) {
            res.status(error.status || 500).json(error);
        }
    }

    async update (req: Request, res: Response) {
        try {
            const data = await CategoryService.update(req.body);
            res.status(200).json(data);
        } catch (error: any) {
            res.status(error.status || 500).json(error);
        }
    }

    async index (req: Request, res: Response) {
        try {
            const name = req.query.name as string;
            const id = req.query.id as string;

            const data = await CategoryService.index(id, name);
            res.status(200).json(data);
        } catch (error: any) {
            res.status(error.status || 500).json(error);
        }
    }

    async indexAll (req: Request, res: Response) {
        try {
            const data = await CategoryService.indexAll();
            res.status(200).json(data);
        } catch (error: any) {
            res.status(error.status || 500).json(error);
        }
    }

    async delete (req: Request, res: Response) {
        try {
            const { id } = req.params;
            await CategoryService.delete(id);
            res.status(200).json();
        } catch (error: any) {
            res.status(error.status || 500).json(error);
        }
    }
}

export default new CategoryController();
