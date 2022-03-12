"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpensesModel = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    value: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    receivedAt: { type: String, required: true },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Category',
    },
    company: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Company',
    }
}, {
    timestamps: true
});
exports.ExpensesModel = (0, mongoose_1.model)("Expenses", schema);
