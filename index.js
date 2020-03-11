const express = require("express");

const studentRoutes = require("./routes/studentRoutes");
const adminRoutes = require("./routes/adminRoutes");

require("dotenv").config();
require("./database/connect");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/student", studentRoutes);
app.use('/api/admin', adminRoutes);


app.get("/", (req, res, next) => {
  res.json({
    message: "hello"
  });
});

const port = process.env.NODE_ENV == "local" ? 5000 : process.env.PORT;

app.listen(port, () => {});
