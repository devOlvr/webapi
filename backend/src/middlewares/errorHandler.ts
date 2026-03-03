import express from 'express'
import HttpError from '@/errors/HttpError'

export default function errorHandler(
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({ message: err.message, code: err.code })
  }
  return res.status(500).json({ message: 'Erro interno do servidor', error: err?.message })
}
