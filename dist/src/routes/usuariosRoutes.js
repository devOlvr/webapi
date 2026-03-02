"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = require("../controllers/usuariosController");
const checkRole_1 = __importDefault(require("../middlewares/checkRole"));
const enumUsuario_1 = __importDefault(require("../enum/enumUsuario"));
const route = (0, express_1.Router)();
route.get('/', (0, checkRole_1.default)([enumUsuario_1.default.ADMINISTRATOR]), usuariosController_1.listUsers);
route.get('/:id', (0, checkRole_1.default)([enumUsuario_1.default.ADMINISTRATOR]), usuariosController_1.listUsersId);
route.post('/', (0, checkRole_1.default)([enumUsuario_1.default.ADMINISTRATOR]), usuariosController_1.createUsers);
route.put('/:id', (0, checkRole_1.default)([enumUsuario_1.default.ADMINISTRATOR]), usuariosController_1.updateUser);
route.delete('/:id', (0, checkRole_1.default)([enumUsuario_1.default.ADMINISTRATOR]), usuariosController_1.deleteUser);
exports.default = route;
