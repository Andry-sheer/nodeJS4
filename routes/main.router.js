import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Main page');
});

router.get('/test-json', (req, res) => {
  res.json({ foo: 3, bar: 3 });
});

router.get('/redirect', (req, res)=> {
  res.redirect('/test-json')
});

router.get('/cat', (req, res)=> {
  res.send(`
    <ul>
      <li><a href="/cat/smartphones">Смартфони</a></li>
      <li><a href="/cat/laptop">Ноутбуки</a></li>
    </ul>
  `);
});

router.get('/cat/:categoryName', (req, res)=> {
  const { categoryName } = req.params;
  res.send(categoryName);
})

router.post('/random', (req, res)=> {
  const minMax = { min: 10, max: 20 }
  res.send(Math.floor(Math.random() * (minMax.max - minMax.min + 1) + minMax.min))
})

export default router;