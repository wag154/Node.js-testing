const express = require("express");
const cors = require ("cors");

require("dotenv").config();

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
// app.use(morgan('dev'));

app.use("/", require("./routes/api.route"))

module.exports = app;