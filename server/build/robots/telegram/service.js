"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
var config_1 = __importDefault(require("../../config/config"));
// const TOKEN = '5115885268:AAFtZrtEr5jw6a0f2263yXs8VrMyXJ29xQE';
var TelegramService = /** @class */ (function () {
    function TelegramService() {
    }
    TelegramService.prototype.sendMessage = function (template) {
        var bot = new node_telegram_bot_api_1.default(config_1.default.TELEGRAM_TOKEN, { polling: true });
        var idTelegram = config_1.default.TELEGRAM_ID;
        bot.sendMessage(idTelegram, template);
    };
    return TelegramService;
}());
exports.default = new TelegramService();
