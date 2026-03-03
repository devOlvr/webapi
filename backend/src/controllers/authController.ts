import express from 'express'
import { registerUser, loginUser, getUserByEmail } from '@/services/authService'
import EnumUsuario from '@/enum/enumUsuario'
import jwt from 'jsonwebtoken'
import { setUserRefreshToken, verifyRefreshToken } from '@/services/authService'

export async function register(req: express.Request, res: express.Response, next: express.NextFunction) {
  try {
    const { nome, email, senha } = req.body
    if (!nome || !email || !senha) return res.status(400).json({ message: 'Campos obrigatórios: nome, email, senha' })
    const user = await registerUser(nome, email, senha, EnumUsuario.COMUM)
    res.status(201).json({ message: 'Usuário registrado', user: { id: user.id, nome: user.nome, email: user.email } })
  } catch (error) {
    next(error)
  }
}

export async function login(req: express.Request, res: express.Response, next: express.NextFunction) {
  try {
    const { email, senha } = req.body
    if (!email || !senha) return res.status(400).json({ message: 'Campos obrigatórios: email, senha' })
    const user = await loginUser(email, senha)
    const secret = process.env.JWT_SECRET
    if (!secret) return res.status(500).json({ message: 'Configuração ausente' })
    const accessTtl = Number(process.env.ACCESS_TOKEN_TTL || 900) // 15 min
    const refreshTtl = Number(process.env.REFRESH_TOKEN_TTL || 604800) // 7 dias
    const isProd = process.env.NODE_ENV === 'production'
    const accessToken = jwt.sign({ id: user.id, email: user.email, role: user.tipoUsuario }, secret, { expiresIn: accessTtl })
    const refreshToken = jwt.sign({ id: user.id, email: user.email, role: user.tipoUsuario }, secret, { expiresIn: refreshTtl })
    await setUserRefreshToken(user.id, refreshToken)
    res.cookie('access_token', accessToken, { httpOnly: true, secure: isProd, sameSite: 'lax', maxAge: accessTtl * 1000, path: '/' })
    res.cookie('refresh_token', refreshToken, { httpOnly: true, secure: isProd, sameSite: 'lax', maxAge: refreshTtl * 1000, path: '/' })
    res.status(200).json({ message: 'Autenticado', user: { id: user.id, nome: user.nome, email: user.email, role: user.tipoUsuario } })
  } catch (error) {
    next({
      message: 'Erro ao autenticar',
      status: 401
    })
  }
}

export async function me(req: express.Request, res: express.Response) {
  if (!req.user) return res.status(401).json({ message: 'Não autenticado' })
  const user = await getUserByEmail(req.user.email)
  if (!user) return res.status(401).json({ message: 'Não autenticado' })
  res.status(200).json({ id: user.id, nome: user.nome, email: user.email, role: user.tipoUsuario })
}

export async function logout(_req: express.Request, res: express.Response) {
  res.clearCookie('access_token', { path: '/' })
  res.clearCookie('refresh_token', { path: '/' })
  res.status(200).json({ message: 'Sessão encerrada' })
}

export async function refresh(req: express.Request, res: express.Response) {
  const rt = req.cookies?.refresh_token
  const secret = process.env.JWT_SECRET
  const isProd = process.env.NODE_ENV === 'production'
  if (!rt || !secret) return res.status(401).json({ message: 'Não autenticado' })
  const payload = await verifyRefreshToken(rt).catch(() => null)
  if (!payload) return res.status(401).json({ message: 'Não autenticado' })
  const accessTtl = Number(process.env.ACCESS_TOKEN_TTL || 900)
  const newAccess = jwt.sign({ id: payload.id, email: payload.email, role: payload.role }, secret, { expiresIn: accessTtl })
  res.cookie('access_token', newAccess, { httpOnly: true, secure: isProd, sameSite: 'lax', maxAge: accessTtl * 1000, path: '/' })
  res.status(200).json({ message: 'Atualizado' })
}
