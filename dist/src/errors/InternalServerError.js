"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = __importDefault(require("./HttpError"));
class InternalServerError extends HttpError_1.default {
    constructor(message = 'Erro interno do servidor') {
        super(message, 500, 'INTERNAL_ERROR');
    }
}
exports.default = InternalServerError;
