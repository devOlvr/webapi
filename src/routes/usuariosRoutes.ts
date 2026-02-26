import express from 'express';
import router from 'express';

const app = router();

app.get('/users', (req: express.Request, res: express.Response) => {
    res.send('OLÁ MUNDO!');
});

export default app;