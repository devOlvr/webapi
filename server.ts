import express from 'express';
import usuariosRoutes from './src/routes/usuariosRoutes'
import { initDatabase } from './src/config/database'
import errorHandler from './src/middlewares/errorHandler'

const PORTA = 3000

const app = express();
app.use(express.json());

initDatabase()
  .then(() => {
    console.log('Banco inicializado: tabela users ok')
    app.listen(PORTA, () => {
        console.log(`\nSeu servidor está rodando em ${process.env.DB_HOST} na porta ${PORTA}
                Acesse: http://localhost:${PORTA}
            `);
    });
  })
  .catch((err) => {
    console.error('Falha ao inicializar o banco:', err)
    process.exit(1)
  })

app.get('/', (req: express.Request, res: express.Response) => {
    res.send("Bem-vindo à minha api");
});

app.use('/users', usuariosRoutes);
app.use(errorHandler);
