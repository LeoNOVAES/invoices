"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var mongoose_1 = require("mongoose");
var bcrypt_1 = __importDefault(require("bcrypt"));
var schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, {
    timestamps: true
});
schema.set('toJSON', {
    transform: function (doc, ret, opt) {
        delete ret['password'];
        return ret;
    }
});
schema.pre('save', function (next) {
    var salt = bcrypt_1.default.genSaltSync();
    this.password = bcrypt_1.default.hashSync(this.password, salt);
    next();
});
schema.methods.checkPassword = function (password) {
    return bcrypt_1.default.compareSync(password, this.password);
};
exports.UserModel = (0, mongoose_1.model)("User", schema);
