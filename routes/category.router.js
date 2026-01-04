import express from 'express';
const categoryRouter = express.Router();


categoryRouter.get('/', (req, res)=> {
  res.send(`
    <ul>
      <li><a href="/cat/smartphones">Смартфони</a></li>
      <li><a href="/cat/laptop">Ноутбуки</a></li>
    </ul>
  `);
})

categoryRouter.get('/:categoryName', (req, res)=> {
  const { categoryName } = req.params;
  res.send(categoryName)
});

export default categoryRouter;

