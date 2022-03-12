import { Request, Response } from 'express';
import UserService from '../../domain/user/service'

class UserController {
    async create (req: Request, res: Response) {
        try {
            const data = await UserService.create(req.body);
            res.status(201).json(data);
        } catch (error: any) {
            res.status(error.status || 500).json(error);
        }
    }

    async update (req, res: Response) {
        try {
            const { userId, body } = req;
            const data = await UserService.update(userId, body);
            res.status(200).json(data);
        } catch (error: any) {
            res.status(error.status || 500).json(error);
        }
    }

    async index (req, res: Response) {
        try {
            const id = req.userId as string;

            const data = await UserService.index(id);
            res.status(200).json(data);
        } catch (error: any) {
            res.status(error.status || 500).json(error);
        }
    }

    async indexAll (req: Request, res: Response) {
        try {
            const data = await UserService.indexAll();
            res.status(200).json(data);
        } catch (error: any) {
            res.status(error.status || 500).json(error);
        }
    }

    async signIn (req: Request, res: Response) {
        try {
            const token = await UserService.signIn(req.body);
            res.status(200).json({ token });
        } catch (error: any) {
            res.status(error.status || 500).json({ error });
        }
    }

    async delete (req, res: Response) {
        try {
            const { userId } = req;
            await UserService.delete(userId);
            res.status(200).json();
        } catch (error: any) {
            res.status(error.status || 500).json(error);
        }
    }
}

export default new UserController();
