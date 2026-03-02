"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuariosRoutes_1 = __importDefault(require("./src/routes/usuariosRoutes"));
const database_1 = require("./src/config/database");
const errorHandler_1 = __importDefault(require("./src/middlewares/errorHandler"));
const PORTA = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, database_1.initDatabase)()
    .then(() => {
    console.log('Banco inicializado: tabela users ok');
    app.listen(PORTA, () => {
        console.log(`\nSeu servidor está rodando em ${process.env.DB_HOST} na porta ${PORTA}
                Acesse: http://localhost:${PORTA}
            `);
    });
})
    .catch((err) => {
    console.error('Falha ao inicializar o banco:', err);
    process.exit(1);
});
app.get('/', (req, res) => {
    res.send("Bem-vindo à minha api");
});
app.use('/users', usuariosRoutes_1.default);
app.use(errorHandler_1.default);
