import { db, query } from '@/config/database'
import ConflictError from '@/errors/ConflictError'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

type UserRow = {
  id: number
  nome: string
  email: string
  senha: string
  tipoUsuario: string
  refresh_token?: string
}

export async function registerUser(nome: string, email: string, senha: string, role: string) {
  const exists = await query<{ id: number }>('SELECT id FROM users WHERE email = ?', [email])
  if (exists.length > 0) throw new ConflictError('O email está sendo usado', 'DUPLICATE_EMAIL')
  const hash = await bcrypt.hash(senha, 10)
  const [result] = await db.execute('INSERT INTO users (nome, email, senha, tipoUsuario) VALUES (?, ?, ?, ?)', [nome, email, hash, role])
  const insertId = (result as any).insertId as number
  const rows = await query<UserRow>('SELECT id, nome, email, senha, tipoUsuario FROM users WHERE id = ?', [insertId])
  return rows[0]
}

export async function loginUser(email: string, senha: string) {
  const rows = await query<UserRow>('SELECT id, nome, email, senha, tipoUsuario FROM users WHERE email = ?', [email])
  if (rows.length === 0) throw new Error('Credenciais inválidas')
  const user = rows[0]
  const ok = await bcrypt.compare(senha, user.senha)
  if (!ok) throw new Error('Credenciais inválidas')
  return user
}

export async function getUserByEmail(email: string) {
  const rows = await query<UserRow>('SELECT id, nome, email, senha, tipoUsuario FROM users WHERE email = ?', [email])
  return rows[0]
}

export async function setUserRefreshToken(userId: number, refreshToken: string) {
  await db.execute('UPDATE users SET refresh_token = ? WHERE id = ?', [refreshToken, userId])
}

export async function verifyRefreshToken(rt: string) {
  const secret = process.env.JWT_SECRET!
  const payload = jwt.verify(rt, secret) as any
  const rows = await query<UserRow>('SELECT id, email, tipoUsuario, refresh_token FROM users WHERE id = ?', [payload.id])
  if (rows.length === 0 || rows[0].refresh_token !== rt) throw new Error('Invalid refresh token')
  return payload
}
