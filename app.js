import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3400;

const loggingMiddle = (req, res, next) => {
  console.log(`method: ${req.method} url: ${req.url}`);
  next();
};

app.get("/", loggingMiddle, (req, res, next) => {
  res.send("Main page");
  next();
});

app.get("/test-json", loggingMiddle, (req, res, next) => {
  res.json({ foo: 3, bar: 3 });
  next();
});

app.get("/redirect", loggingMiddle, (req, res, next) => {
  res.redirect("/test-json");
  next();
});













app.use((req, res) => {
  res.status(404).send("page not found | 404");
});

app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
