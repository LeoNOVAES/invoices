"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
var interfaces_1 = require("../../interfaces");
function map(notification) {
    console.log('moey mapper init');
    return {
        provider: 'moey',
        source: 'test',
        type: interfaces_1.TypeTransaction.INPUT,
        value: 1,
    };
}
exports.map = map;
