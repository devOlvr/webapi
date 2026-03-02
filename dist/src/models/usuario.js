"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, nome, email, senha, role) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.role = role;
    }
}
exports.default = User;
