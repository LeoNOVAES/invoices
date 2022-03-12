import { Request, Response } from 'express';
import InvoiceService from '../../domain/invoice/service'

class InvoiceController {
    async create (req, res) {
        try {
            const { userId } = req;
            const { body } = req;
            const data = { ...body, owner: userId };

            const response = await InvoiceService.create(data);
            res.status(201).json(response);
        } catch (error: any) {
            res.status(error.status || 500).json(error);
        }
    }

    async update (req, res) {
        try {
            const { body } = req;
            const { id } = req.params;
 
            const data = await InvoiceService.update(id, body);
            res.status(200).json(data);
        } catch (error: any) {
            console.log('[error] - ', error);
            res.status(error.status || 500).json(error);
        }
    }

    async index (req, res) {
        try {
            const id = req.query.id as string;
            const number = req.query.number as string;

            const data = await InvoiceService.index(id, number);
            res.status(200).json(data);
        } catch (error: any) {
            res.status(error.status || 500).json(error);
        }
    }

    async indexAll (req, res) {
        try {
            const { userId } = req;
            const data = await InvoiceService.indexAll(userId);
            res.status(200).json(data);
        } catch (error: any) {
            res.status(error.status || 500).json(error);
        }

    }

    async delete (req, res) {
        try {
            const { id } = req.params;
            const { userId } = req;
            await InvoiceService.delete(id);
            res.status(200).json();
        } catch (error: any) {
            res.status(error.status || 500).json(error);
        }
    }
}

export default new InvoiceController();
