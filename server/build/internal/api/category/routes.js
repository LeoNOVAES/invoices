"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var authorization_1 = __importDefault(require("../../domain/middlewares/authorization"));
var controller_1 = __importDefault(require("./controller"));
var routes = express_1.default.Router();
routes.post('/category', authorization_1.default.verifyToken, controller_1.default.create);
routes.put('/category/:id', authorization_1.default.verifyToken, controller_1.default.update);
routes.get('/category', authorization_1.default.verifyToken, controller_1.default.index);
routes.get('/category/all', authorization_1.default.verifyToken, controller_1.default.indexAll);
routes.delete('/category/:id', authorization_1.default.verifyToken, controller_1.default.delete);
exports.default = routes;
