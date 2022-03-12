import express, { Router } from "express";

import AuthorizationMiddleware from '../../domain/middlewares/authorization'
import CompanyController from "./controller";

const routes: Router = express.Router();

routes.post('/company', AuthorizationMiddleware.verifyToken ,CompanyController.create);
routes.put('/company/:id', AuthorizationMiddleware.verifyToken, CompanyController.update);
routes.get('/company', AuthorizationMiddleware.verifyToken ,CompanyController.index);
routes.get('/company/all', AuthorizationMiddleware.verifyToken ,CompanyController.indexAll);
routes.delete('/company/:id', AuthorizationMiddleware.verifyToken ,CompanyController.delete);

export default routes;