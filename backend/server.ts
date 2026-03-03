import express from 'express';
import usuariosRoutes from '@/routes/usuariosRoutes'
import { initDatabase } from '@/config/database'
import errorHandler from '@/middlewares/errorHandler'
import authRoutes from '@/routes/authRoutes'
import requireAuth from '@/middlewares/requireAuth'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const PORTA = 3000

const app = express();
app.use(express.json());
app.use(cookieParser());
app.set('trust proxy', 1)
const isProd = process.env.NODE_ENV === 'production'
app.use(cors({
  origin: isProd ? (process.env.CORS_ORIGIN || 'http://localhost:5173') : true,
  credentials: true
}));

initDatabase()
  .then(() => {
    console.log('Banco inicializado: tabela users ok')
    app.listen(PORTA, () => {
        console.log(`\nSeu servidor está rodando em ${process.env.DB_HOST} na porta ${PORTA}
                Acesse: http://localhost:${PORTA}
            `);
    });
  })
  .catch((err: Error) => {
    console.error('Falha ao inicializar o banco:', err)
    process.exit(1)
  })

app.get('/', (req: express.Request, res: express.Response) => {
    res.send("Bem-vindo à minha api");
});

app.use('/auth', authRoutes);
app.use('/users', requireAuth, usuariosRoutes);
app.use(errorHandler);
