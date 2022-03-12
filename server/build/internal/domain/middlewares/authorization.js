"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var AuthorizationMiddleware = /** @class */ (function () {
    function AuthorizationMiddleware() {
    }
    AuthorizationMiddleware.verifyToken = function (req, res, next) {
        try {
            var authHeader = req.headers.authorization;
            if (!authHeader)
                throw new Error();
            var tokenWords = authHeader.split(' ');
            if (tokenWords.length !== 2)
                throw new Error();
            var schema = tokenWords[0], token = tokenWords[1];
            if (schema !== 'Bearer')
                throw new Error();
            jsonwebtoken_1.default.verify(token, 'secret', function (err, decoded) {
                if (err)
                    throw new Error();
                req.userId = decoded.id;
                return next();
            });
        }
        catch (error) {
            res.status(500).json({ error: 'token malformed!' });
            next(error);
        }
    };
    return AuthorizationMiddleware;
}());
exports.default = AuthorizationMiddleware;
