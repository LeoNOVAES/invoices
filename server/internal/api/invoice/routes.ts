import express, { Router } from "express";
import InvoiceController from "./controller";

const routes: Router = express.Router();

routes.post('/invoice', InvoiceController.create);
routes.put('/invoice', InvoiceController.update);
routes.get('/invoice', InvoiceController.index);
routes.get('/invoice/all', InvoiceController.indexAll);
routes.delete('/invoice/:id', InvoiceController.delete);

export default routes;