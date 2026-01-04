import express from 'express';
const testJSONrouter = express.Router()

testJSONrouter.get('/', (req, res) => {
  res.json({ foo: 3, bar: 3 });
});

export default testJSONrouter;