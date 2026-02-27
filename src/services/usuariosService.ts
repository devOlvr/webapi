import { db, query } from '../config/database'
import ConflictError from '../errors/ConflictError'

type UserRow = {
  id: number
  nome: string
  email: string
  senha: string
}

export async function createUser(nome: string, email: string, senha: string) {
  const exists = await query<{ id: number }>('SELECT id FROM users WHERE email = ?', [email])
  if (exists.length > 0) {
    throw new ConflictError('O email está sendo usado', 'DUPLICATE_EMAIL')
  }
  try {
    const [result] = await db.execute('INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha])
    const insertId = (result as any).insertId as number
    const rows = await query<UserRow>('SELECT id, nome, email, senha FROM users WHERE id = ?', [insertId])
    return rows[0]
  } catch (error: any) {
    if (error && error.code === 'ER_DUP_ENTRY') {
      throw new ConflictError('O email está sendo usado', 'DUPLICATE_EMAIL')
    }
    throw error
  }
}

export async function listAllUsers() {
  const rows = await query<Omit<UserRow, 'senha'>>('SELECT id, nome, email FROM users')
  return rows
}

export async function listUserById(id: number) {
  const rows = await query<Omit<UserRow, 'senha'>>('SELECT id, nome, email FROM users WHERE id = ?', [id])
  return rows[0]
}

export async function updateUserById(id: number, payload: Partial<Pick<UserRow, 'nome' | 'email' | 'senha'>>) {
  const current = await query<UserRow>('SELECT id, nome, email, senha FROM users WHERE id = ?', [id])
  if (current.length === 0) return null
  const user = current[0]
  const nome = payload.nome ?? user.nome
  const email = payload.email ?? user.email
  const senha = payload.senha ?? user.senha
  try {
    await db.execute('UPDATE users SET nome = ?, email = ?, senha = ? WHERE id = ?', [nome, email, senha, id])
  } catch (error: any) {
    if (error && error.code === 'ER_DUP_ENTRY') {
      throw new ConflictError('O email está sendo usado', 'DUPLICATE_EMAIL')
    }
    throw error
  }
  const rows = await query<UserRow>('SELECT id, nome, email, senha FROM users WHERE id = ?', [id])
  return rows[0]
}

export async function deleteUserById(id: number) {
  const [result] = await db.execute('DELETE FROM users WHERE id = ?', [id])
  return (result as any).affectedRows > 0
}
