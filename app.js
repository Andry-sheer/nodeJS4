import express from 'express';
import dotenv from 'dotenv';
import mainRouter from './routes/main.router.js';
import testJSONrouter from './routes/test_json.router.js';
import redirectRouter from './routes/redirect.router.js';
import categoryRouter from './routes/category.router.js';
import randomRouter from './routes/random.router.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3400;

app.use('/', mainRouter);
app.use('/test-json', testJSONrouter)
app.use('/redirect', redirectRouter)
app.use('/cat', categoryRouter)
app.use('/random', randomRouter)


app.use((req, res) => {
  res.status(404).send('page not found | 404');
});

app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
