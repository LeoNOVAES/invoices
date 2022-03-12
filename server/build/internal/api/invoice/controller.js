"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = __importDefault(require("../../domain/invoice/service"));
var InvoiceController = /** @class */ (function () {
    function InvoiceController() {
    }
    InvoiceController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, body, data, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        userId = req.userId;
                        body = req.body;
                        data = __assign(__assign({}, body), { owner: userId });
                        return [4 /*yield*/, service_1.default.create(data)];
                    case 1:
                        response = _a.sent();
                        res.status(201).json(response);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        res.status(error_1.status || 500).json(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    InvoiceController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var body, id, data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        body = req.body;
                        id = req.params.id;
                        return [4 /*yield*/, service_1.default.update(id, body)];
                    case 1:
                        data = _a.sent();
                        res.status(200).json(data);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log('[error] - ', error_2);
                        res.status(error_2.status || 500).json(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    InvoiceController.prototype.index = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, number, data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.query.id;
                        number = req.query.number;
                        return [4 /*yield*/, service_1.default.index(id, number)];
                    case 1:
                        data = _a.sent();
                        res.status(200).json(data);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        res.status(error_3.status || 500).json(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    InvoiceController.prototype.indexAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        userId = req.userId;
                        return [4 /*yield*/, service_1.default.indexAll(userId)];
                    case 1:
                        data = _a.sent();
                        res.status(200).json(data);
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        res.status(error_4.status || 500).json(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    InvoiceController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, userId, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        userId = req.userId;
                        return [4 /*yield*/, service_1.default.delete(id)];
                    case 1:
                        _a.sent();
                        res.status(200).json();
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        res.status(error_5.status || 500).json(error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return InvoiceController;
}());
exports.default = new InvoiceController();
