"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyModel = exports.CompanySchema = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    fiscalNumber: { type: String, required: true },
    name: { type: String, required: true },
    corporativeName: { type: String, required: true }
}, {
    timestamps: true
});
exports.CompanySchema = schema;
exports.CompanyModel = (0, mongoose_1.model)("Company", schema);
