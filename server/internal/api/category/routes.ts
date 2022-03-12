import express, { Router } from "express";

import AuthorizationMiddleware from "../../domain/middlewares/authorization";
import CategoryController from "./controller";

const routes: Router = express.Router();

routes.post('/category',AuthorizationMiddleware.verifyToken , CategoryController.create);
routes.put('/category/:id',AuthorizationMiddleware.verifyToken , CategoryController.update);
routes.get('/category',AuthorizationMiddleware.verifyToken , CategoryController.index);
routes.get('/category/all',AuthorizationMiddleware.verifyToken , CategoryController.indexAll);
routes.delete('/category/:id',AuthorizationMiddleware.verifyToken , CategoryController.delete);

export default routes;