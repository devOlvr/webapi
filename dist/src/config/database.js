"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
exports.query = query;
exports.initDatabase = initDatabase;
const mysql2_1 = __importDefault(require("mysql2"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pool = mysql2_1.default.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
exports.db = pool.promise();
async function query(sql, params) {
    const [rows] = await exports.db.query(sql, params);
    return rows;
}
async function initDatabase() {
    const host = process.env.DB_HOST;
    const user = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;
    const port = process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined;
    const database = process.env.DB_DATABASE;
    const admin = mysql2_1.default.createConnection({ host, user, password, port });
    const adminP = admin.promise();
    await adminP.query(`CREATE DATABASE IF NOT EXISTS \`${database}\``);
    await adminP.end();
    await exports.db.query(`
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(65) NOT NULL,
            email VARCHAR(65) NOT NULL UNIQUE,
            senha VARCHAR(65) NOT NULL,
            tipoUsuario ENUM('administrator', 'comum') NOT NULL DAFAULT 'comum'
        )
    `);
}
