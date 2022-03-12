"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HandlerMiddleware = /** @class */ (function () {
    function HandlerMiddleware() {
    }
    HandlerMiddleware.prototype.responses = function (err, req, res, next) {
        console.log('\n\n\n aquiii \n\n\n');
        if (err && err !== '') {
            res.status(err.status || 500).json({
                message: err.message || 'Internal Error',
                error: err.error
            });
        }
        console.log('--->', res);
    };
    return HandlerMiddleware;
}());
exports.default = new HandlerMiddleware();
