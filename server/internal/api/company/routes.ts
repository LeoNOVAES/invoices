import express, { Router } from "express";
import CompanyController from "./controller";

const routes: Router = express.Router();

routes.post('/company', CompanyController.create);
routes.put('/company', CompanyController.update);
routes.get('/company', CompanyController.index);
routes.get('/company/all', CompanyController.indexAll);
routes.delete('/company/:id', CompanyController.delete);

export default routes;