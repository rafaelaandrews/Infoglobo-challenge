const express = require('express');
const app = express();
const cors = require('cors');

const index = require("./routes/index");
const noticiaR = require('./routes/noticia.router'); 

const mongoose = require('mongoose');
let url = 'mongodb+srv://admin:JKXricpP9BWqe4k@cluster0.y6j52.mongodb.net/noticia?retryWrites=true&w=majority';
mongoose.connect(url);
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));

app.use(express.json());
app.use(cors());

app.use("/", index);
app.use('/noticia', noticiaR);

module.exports = app;