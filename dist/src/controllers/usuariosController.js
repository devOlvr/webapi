"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsers = createUsers;
exports.listUsers = listUsers;
exports.listUsersId = listUsersId;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
const usuariosService_1 = require("@/services/usuariosService");
const ValidationError_1 = __importDefault(require("@/errors/ValidationError"));
const NotFoundError_1 = __importDefault(require("@/errors/NotFoundError"));
function validateAllowedFields(body, allowed) {
    const keys = Object.keys(body || {});
    const invalid = keys.filter(k => !allowed.includes(k));
    if (invalid.length > 0) {
        throw new ValidationError_1.default(`Campos inválidos: ${invalid.join(', ')}`);
    }
}
async function createUsers(req, res, next) {
    try {
        validateAllowedFields(req.body, ['nome', 'email', 'senha']);
        const { nome, email, senha } = req.body;
        if (!nome || !email || !senha) {
            throw new ValidationError_1.default("Campos obrigatórios: nome, email, senha");
        }
        const user = await (0, usuariosService_1.createUser)(nome, email, senha);
        res.status(201).json({ message: "Usuário criado com sucesso!", user });
    }
    catch (error) {
        next(error);
    }
}
async function listUsers(req, res, next) {
    try {
        const usersList = await (0, usuariosService_1.listAllUsers)();
        res.status(200).json({ message: "Lista de usuários:", usersList });
    }
    catch (error) {
        next(error);
    }
}
async function listUsersId(req, res, next) {
    try {
        const id = Number(req.params.id);
        const user = await (0, usuariosService_1.listUserById)(id);
        if (!user) {
            throw new NotFoundError_1.default("Usuário não encontrado!");
        }
        res.status(200).json({ message: "Lista de usuários:", user });
    }
    catch (error) {
        next(error);
    }
}
async function updateUser(req, res, next) {
    try {
        validateAllowedFields(req.body, ['nome', 'email', 'senha']);
        const id = Number(req.params.id);
        const user = await (0, usuariosService_1.updateUserById)(id, req.body);
        if (!user) {
            throw new NotFoundError_1.default("Usuário não encontrado!");
        }
        return res.status(200).json({ message: "Usuário atualizado com sucesso!", user });
    }
    catch (error) {
        next(error);
    }
}
async function deleteUser(req, res, next) {
    try {
        const id = Number(req.params.id);
        const deleted = await (0, usuariosService_1.deleteUserById)(id);
        if (!deleted) {
            throw new NotFoundError_1.default("Usuário não encontrado!");
        }
        return res.status(200).json({ message: "Usuário deletado com sucesso!" });
    }
    catch (error) {
        next(error);
    }
}
