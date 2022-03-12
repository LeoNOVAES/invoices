"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionMapper = void 0;
var TransactionMapper = /** @class */ (function () {
    function TransactionMapper(provider) {
        this.provider = provider;
    }
    TransactionMapper.prototype.build = function () {
        try {
            return require("./".concat(this.provider));
        }
        catch (error) {
            throw new Error('provider doest exists');
        }
    };
    return TransactionMapper;
}());
exports.TransactionMapper = TransactionMapper;
