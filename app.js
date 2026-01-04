import express from 'express';
import dotenv from 'dotenv';
import mainRouter from './routes/main.router.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3400;

app.use('/', mainRouter);

app.use((req, res) => {
  res.status(404).send('page not found | 404');
});

app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
