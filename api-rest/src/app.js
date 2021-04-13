const express = require('express');
const app = express();
const cors = require('cors');

const { handleError } = require('./core/error');

const index = require("./routes/index");
const noticiaR = require('./routes/noticia.router'); 

const mongoose = require('mongoose');
let connection = 'mongodb://db-infoglobo:27017/noticia';

mongoose.connect(connection);

app.use(express.json());
app.use(cors());

app.use("/", index);
app.use('/noticia', noticiaR);

app.use(function (err, req, res, next) {
    handleError(err, res);
});

module.exports = app;