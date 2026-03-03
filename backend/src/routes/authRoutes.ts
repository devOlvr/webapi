import { Router } from 'express'
import { register, login, me, logout, refresh } from '@/controllers/authController'
import requireAuth from '@/middlewares/requireAuth'
import rateLimit from 'express-rate-limit'

const route = Router()

const loginLimiter = rateLimit({
  windowMs: 60_000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false
})

route.post('/register', register)
route.post('/login', loginLimiter, login)
route.get('/me', requireAuth, me)
route.post('/refresh', refresh)
route.post('/logout', requireAuth, logout)

export default route
