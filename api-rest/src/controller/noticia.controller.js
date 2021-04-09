const Noticia = require('../model/noticia.model');

exports.create = (req, res) => {
	console.log(req.body)
	let noticia = new Noticia(
		{
			titulo: req.body.titulo,
			conteudo: req.body.conteudo,
			dataPublicacao: req.body.dataPublicacao
		}
	);
	noticia.save((err) => {
		if (err) return next(err);
		res.send('Notícia criada com sucesso')
	})
};

exports.findById = (req, res) => {
	Noticia.findById(req.params.id, function (err, noticia) {
		if (err) return next(err);
		res.send(noticia);
	})
};

exports.findAll = (req, res) => {
	Noticia.find((err, noticias) => {
		if (err) return next(err);
		res.send(noticias);
	})
};

exports.update = function (req, res) {
    Noticia.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, noticia) {
        if (err) return next(err);
        res.send('Notícia atualizada com sucesso');
    });
};

exports.delete = function (req, res) {
    Noticia.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Notícia deletada com sucesso');
    })
};