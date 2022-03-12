import express, { Router } from "express";

import AuthorizationMiddleware from '../../domain/middlewares/authorization'
import ExpensesController from "./controller";

const routes: Router = express.Router();

routes.post('/expenses', AuthorizationMiddleware.verifyToken , ExpensesController.create);
routes.put('/expenses/:id', AuthorizationMiddleware.verifyToken , ExpensesController.update);
routes.get('/expenses', AuthorizationMiddleware.verifyToken , ExpensesController.index);
routes.get('/expenses/all', AuthorizationMiddleware.verifyToken , ExpensesController.indexAll);
routes.delete('/expenses/:id', AuthorizationMiddleware.verifyToken , ExpensesController.delete);

export default routes;