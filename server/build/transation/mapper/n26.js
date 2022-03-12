"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
var interfaces_1 = require("../../interfaces");
function map(notification) {
    console.log('n26 mapper init');
    var message = notification.message;
    var splitedMessage = message.split('of');
    var value = message.replace(/^\D+/g, '');
    var source = message.split('to')[1].split(' ')[2] === 'has'
        ? message.split('to')[1].split(' ')[1]
        : "".concat(message.split('to')[1].split(' ')[1], " ").concat(message.split('to')[1].split(' ')[2]);
    var type = splitedMessage[0].trim().toLowerCase() == 'your payment'
        || splitedMessage[0].trim().toLowerCase() == 'your withdrawal'
        ? interfaces_1.TypeTransaction.OUTPUT
        : interfaces_1.TypeTransaction.INPUT;
    return {
        provider: notification.application,
        source: source,
        type: type,
        value: parseFloat(value),
    };
}
exports.map = map;
