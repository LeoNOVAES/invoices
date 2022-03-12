"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controller_1 = __importDefault(require("./controller"));
var routes = express_1.default.Router();
routes.post('/category', controller_1.default.create);
routes.put('/category', controller_1.default.update);
routes.get('/category', controller_1.default.index);
routes.get('/category/all', controller_1.default.indexAll);
routes.delete('/category/:id', controller_1.default.delete);
exports.default = routes;
