"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    active: { type: Boolean, required: true }
}, {
    timestamps: true
});
exports.CategoryModel = (0, mongoose_1.model)("Category", schema);
