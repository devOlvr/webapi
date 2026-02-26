import express from 'express';
import usuariosRoutes from './src/routes/usuariosRoutes'

const PORTA = 3000

const app = express();
app.use(express.json());

app.listen(PORTA, () => {
    console.log(`O SERVIDOR ESTÁ RODANDO NA PORTA ${PORTA}`);
});

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('OLÁ MUNDO!');
});

app.use(usuariosRoutes);