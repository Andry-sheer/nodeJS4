import express from 'express';
const redirectRouter = express.Router()

redirectRouter.get('/', (req, res)=> {
  res.redirect('/test-json');
});

export default redirectRouter;
