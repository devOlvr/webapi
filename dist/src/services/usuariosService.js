"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
exports.listAllUsers = listAllUsers;
exports.listUserById = listUserById;
exports.updateUserById = updateUserById;
exports.deleteUserById = deleteUserById;
const database_1 = require("@/config/database");
// db: pool de conexões em modo promise (mysql2) para comandos como INSERT/UPDATE/DELETE
// query: helper que executa SELECT com parâmetros e retorna rows tipados
const ConflictError_1 = __importDefault(require("@/errors/ConflictError"));
async function createUser(nome, email, senha) {
    // valida unicidade do email antes do INSERT para evitar incremento indevido do AUTO_INCREMENT
    const exists = await (0, database_1.query)('SELECT id FROM users WHERE email = ?', [email]);
    if (exists.length > 0) {
        // lança erro de conflito padronizado, tratado pelo middleware global
        throw new ConflictError_1.default('O email está sendo usado', 'DUPLICATE_EMAIL');
    }
    try {
        // uso de placeholders (?) para prevenir SQL injection
        const [result] = await database_1.db.execute('INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha]);
        const insertId = result.insertId;
        const rows = await (0, database_1.query)('SELECT id, nome, email, senha FROM users WHERE id = ?', [insertId]);
        return rows[0];
    }
    catch (error) {
        if (error && error.code === 'ER_DUP_ENTRY') {
            // fallback: se o banco reportar duplicidade, converte para ConflictError
            throw new ConflictError_1.default('O email está sendo usado', 'DUPLICATE_EMAIL');
        }
        throw error;
    }
}
async function listAllUsers() {
    const rows = await (0, database_1.query)('SELECT id, nome, email FROM users');
    return rows;
}
async function listUserById(id) {
    const rows = await (0, database_1.query)('SELECT id, nome, email FROM users WHERE id = ?', [id]);
    return rows[0];
}
async function updateUserById(id, payload) {
    const current = await (0, database_1.query)('SELECT id, nome, email, senha FROM users WHERE id = ?', [id]);
    if (current.length === 0)
        return null;
    const user = current[0];
    const nome = payload.nome ?? user.nome;
    const email = payload.email ?? user.email;
    const senha = payload.senha ?? user.senha;
    try {
        // UPDATE com placeholders e try/catch para capturar violação de unicidade (email)
        await database_1.db.execute('UPDATE users SET nome = ?, email = ?, senha = ? WHERE id = ?', [nome, email, senha, id]);
    }
    catch (error) {
        if (error && error.code === 'ER_DUP_ENTRY') {
            // se tentar atualizar para um email já existente, lança ConflictError
            throw new ConflictError_1.default('O email está sendo usado', 'DUPLICATE_EMAIL');
        }
        throw error;
    }
    const rows = await (0, database_1.query)('SELECT id, nome, email, senha FROM users WHERE id = ?', [id]);
    return rows[0];
}
async function deleteUserById(id) {
    // DELETE retorna affectedRows; se 0, nenhum registro foi removido (id inexistente)
    const [result] = await database_1.db.execute('DELETE FROM users WHERE id = ?', [id]);
    return result.affectedRows > 0;
}
