"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorHandler;
const HttpError_1 = __importDefault(require("../errors/HttpError"));
function errorHandler(err, req, res, next) {
    if (err instanceof HttpError_1.default) {
        return res.status(err.statusCode).json({ message: err.message, code: err.code });
    }
    return res.status(500).json({ message: 'Erro interno do servidor', error: err?.message });
}
