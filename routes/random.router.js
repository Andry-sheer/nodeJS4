import express from "express";
const randomRouter = express.Router();

randomRouter.post('/', (req, res)=> {
  const random = Math.floor(Math.random() * (20 - 10 + 1) + 10);
  res.send(random);
});

export default randomRouter;