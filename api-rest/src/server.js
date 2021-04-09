const express = require('express');

const noticiaR = require('./routes/noticia.router'); 
const app = express();

const { Logger } = require('./core/logger');
const logger = new Logger('server.js');

const mongoose = require('mongoose');
let url = 'mongodb+srv://admin:JKXricpP9BWqe4k@cluster0.y6j52.mongodb.net/noticia?retryWrites=true&w=majority';
mongoose.connect(url);
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', noticiaR);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    logger.info(`App listening on port ${PORT}!`);
});
