import { Request, Response } from 'express';
import InvoiceService from '../../domain/invoice/service'

class InvoiceController {
    async create (req: Request, res: Response) {
        try {
            const data = await InvoiceService.create(req.body);
            res.status(201).json(data);
        } catch (error: any) {
            res.status(error.status || 500).json(error);
        }
    }

    async update (req: Request, res: Response) {
        try {
            const data = await InvoiceService.update(req.body);
            res.status(200).json(data);
        } catch (error: any) {
            res.status(error.status || 500).json(error);
        }
    }

    async index (req: Request, res: Response) {
        try {
            const id = req.query.id as string;
            const number = req.query.number as string;

            const data = await InvoiceService.index(id, number);
            res.status(200).json(data);
        } catch (error: any) {
            res.status(error.status || 500).json(error);
        }
    }

    async indexAll (req: Request, res: Response) {
        try {
            const data = await InvoiceService.indexAll();
            res.status(200).json(data);
        } catch (error: any) {
            console.log('\n\n\n error -> ', error)
            res.status(error.status || 500).json(error);
        }
    }

    async delete (req: Request, res: Response) {
        try {
            const { id } = req.params;
            await InvoiceService.delete(id);
            res.status(200).json();
        } catch (error: any) {
            console.log('\n\n\n error -> ', error)
            res.status(error.status || 500).json(error);
        }
    }
}

export default new InvoiceController();
