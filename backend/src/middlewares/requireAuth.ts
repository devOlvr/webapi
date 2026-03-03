import express from 'express'
import jwt from 'jsonwebtoken'

export default function requireAuth(req: express.Request, res: express.Response, next: express.NextFunction) {
  const token = req.cookies?.access_token
  if (!token) return res.status(401).json({ message: 'Não autenticado' })
  const secret = process.env.JWT_SECRET
  if (!secret) return res.status(500).json({ message: 'Configuração ausente' })
  try {
    const payload = jwt.verify(token, secret) as any
    req.user = { id: payload.id, email: payload.email, role: payload.role }
    next()
  } catch {
    return res.status(401).json({ message: 'Token inválido' })
  }
}
