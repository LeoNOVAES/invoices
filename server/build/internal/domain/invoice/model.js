"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceModel = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    value: { type: Number, required: true },
    number: { type: String, required: true },
    description: { type: String, required: true },
    month: { type: String, required: true },
    receivedAt: { type: String, required: true },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Category',
    },
    company: {
        type: 'ObjectId',
        ref: 'Company',
    },
}, {
    timestamps: true
});
exports.InvoiceModel = (0, mongoose_1.model)("Invoice", schema);
