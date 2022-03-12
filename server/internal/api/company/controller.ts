import { Request, Response } from 'express';
import CompanyService from '../../domain/company/service'

class CompanyController {
    async create (req: Request, res: Response) {
        try {
            const data = await CompanyService.create(req.body);
            res.status(201).json(data);
        } catch (error: any) {
            res.status(error.status || 500).json(error);
        }
    }

    async update (req: Request, res: Response) {
        try {
            const data = await CompanyService.update(req.body);
            res.status(200).json(data);
        } catch (error: any) {
            res.status(error.status).json(error);
        }
    }

    async index (req: Request, res: Response) {
        try {
            const name = req.query.name as string;
            const id = req.query.id as string;
            const fiscalNumber = req.query.fiscalNumber as string;
            const corporativeName = req.query.corporativeName as string;

            const data = await CompanyService.index(id, name, fiscalNumber, corporativeName);
            res.status(200).json(data);
        } catch (error: any) {
            res.status(error.status || 500).json(error);
        }
    }

    async indexAll (req: Request, res: Response) {
        try {
            const data = await CompanyService.indexAll();
            res.status(200).json(data);
        } catch (error: any) {
            res.status(error.status || 500).json(error);
        }
    }

    async delete (req: Request, res: Response) {
        try {
            const { id } = req.params;
            await CompanyService.delete(id);
            res.status(200).json();
        } catch (error: any) {
            res.status(error.status || 500).json(error);
        }
    }
}

export default new CompanyController();
