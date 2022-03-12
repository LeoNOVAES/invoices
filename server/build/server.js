"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
// ROUTES
var routes_1 = __importDefault(require("./internal/api/company/routes"));
var routes_2 = __importDefault(require("./internal/api/category/routes"));
var routes_3 = __importDefault(require("./internal/api/invoice/routes"));
var routes_4 = __importDefault(require("./internal/api/user/routes"));
var routes_5 = __importDefault(require("./internal/api/expenses/routes"));
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
mongoose_1.default.connect(process.env.MONGO_URL || 'mongodb+srv://leandronovaes:53Gst52nybl0qhHy@cluster0.xj0qd.mongodb.net/invoices?retryWrites=true&w=majority');
var PORT = 3333;
app.listen(PORT || process.env.PORT, function () { return console.log("App listening on PORT ".concat(PORT)); });
