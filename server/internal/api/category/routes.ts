import express, { Router } from "express";
import CategoryController from "./controller";

const routes: Router = express.Router();

routes.post('/category', CategoryController.create);
routes.put('/category', CategoryController.update);
routes.get('/category', CategoryController.index);
routes.get('/category/all', CategoryController.indexAll);
routes.delete('/category/:id', CategoryController.delete);

export default routes;