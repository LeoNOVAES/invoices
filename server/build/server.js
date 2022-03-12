"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv = __importStar(require("dotenv"));
// ROUTES
var routes_1 = __importDefault(require("./internal/api/company/routes"));
var routes_2 = __importDefault(require("./internal/api/category/routes"));
var routes_3 = __importDefault(require("./internal/api/invoice/routes"));
var routes_4 = __importDefault(require("./internal/api/user/routes"));
var routes_5 = __importDefault(require("./internal/api/expenses/routes"));
var config = dotenv.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.default);
app.use(routes_2.default);
app.use(routes_3.default);
app.use(routes_4.default);
app.use(routes_5.default);
app.get('/healthcheck', function (req, res) {
    res.send('everything ok');
});
console.log(process.env.MONGO_URL);
mongoose_1.default.connect(process.env.MONGO_URL || '');
var PORT = 3333;
app.listen(PORT || process.env.PORT, function () { return console.log("App listening on PORT ".concat(PORT)); });
