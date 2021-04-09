const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let NoticiaSchema = new Schema({
    titulo: { type: String, required: true },
    conteudo: { type: String, required: true },
    dataPublicacao: { type: Date, required: true }
});

module.exports = mongoose.model('Noticia', NoticiaSchema);