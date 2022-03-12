"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var env = require('process').env;
require('dotenv/config');
var envs = {
    MONGO_URL: env.MONGO_URL,
    TELEGRAM_TOKEN: env.TELEGRAM_TOKEN,
    TELEGRAM_ID: env.TELEGRAM_ID,
};
exports.default = envs;
