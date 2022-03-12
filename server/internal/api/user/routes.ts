import express, { Router } from "express";
import AuthorizationMiddleware from "../../domain/middlewares/authorization";
import UserController from "./controller";

const routes: Router = express.Router();

routes.post('/user', UserController.create);
routes.post('/user/signIn', UserController.signIn);
routes.put('/user', AuthorizationMiddleware.verifyToken ,UserController.update);
routes.get('/user', AuthorizationMiddleware.verifyToken ,UserController.index);
routes.delete('/user', AuthorizationMiddleware.verifyToken ,UserController.delete);

export default routes;