"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionModel = void 0;
var interfaces_1 = require("../interfaces");
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    provider: { type: String, required: true },
    source: { type: String, required: true },
    value: { type: Number, required: true },
    type: { type: String, enum: interfaces_1.TypeTransaction, default: interfaces_1.TypeTransaction.OUTPUT }
});
exports.TransactionModel = (0, mongoose_1.model)("Transaction", schema);
