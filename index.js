const express = require("express");
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.json({
    message: "hello"
  });
});

const port = process.env.NODE_ENV == 'local' ? 5000 : process.env.PORT

app.listen(port, () => {});
