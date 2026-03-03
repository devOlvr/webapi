import mysql, { PoolOptions } from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
} as PoolOptions)

export const db = pool.promise()

export async function query<T = any>(sql: string, params?: any[]) {
    const [rows] = await db.query(sql, params)
    return rows as T[]
}

export async function initDatabase() {
    const host = process.env.DB_HOST
    const user = process.env.DB_USER
    const password = process.env.DB_PASSWORD
    const port = process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined
    const database = process.env.DB_DATABASE

    const admin = mysql.createConnection({ host, user, password, port })
    const adminP = admin.promise()
    await adminP.query(`CREATE DATABASE IF NOT EXISTS \`${database}\``)
    await adminP.end()

    await db.query(`
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(65) NOT NULL,
            email VARCHAR(65) NOT NULL UNIQUE,
            senha VARCHAR(65) NOT NULL,
            tipoUsuario ENUM('administrator', 'comum') NOT NULL DEFAULT 'comum',
            refresh_token VARCHAR(255),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
    `)
    try { await db.query(`ALTER TABLE users ADD COLUMN tipoUsuario ENUM('administrator','comum') NOT NULL DEFAULT 'comum'`) } catch {}
    try { await db.query(`ALTER TABLE users ADD COLUMN refresh_token VARCHAR(255)`) } catch {}
    try { await db.query(`ALTER TABLE users ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP`) } catch {}
    try { await db.query(`ALTER TABLE users ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`) } catch {}
}

