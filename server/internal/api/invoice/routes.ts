import express, { Router } from "express";

import AuthorizationMiddleware from '../../domain/middlewares/authorization'
import InvoiceController from "./controller";

const routes: Router = express.Router();

routes.post('/invoice', AuthorizationMiddleware.verifyToken , InvoiceController.create);
routes.put('/invoice/:id', AuthorizationMiddleware.verifyToken , InvoiceController.update);
routes.get('/invoice', AuthorizationMiddleware.verifyToken , InvoiceController.index);
routes.get('/invoice/all', AuthorizationMiddleware.verifyToken , InvoiceController.indexAll);
routes.delete('/invoice/:id', AuthorizationMiddleware.verifyToken , InvoiceController.delete);

export default routes;