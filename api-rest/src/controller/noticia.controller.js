const Noticia = require('../model/noticia.model');

exports.create = function (req, res) {
	let noticia = new Noticia(
		{
			titulo: req.body.titulo,
			conteudo: req.body.conteudo,
			dataPublicacao: req.body.dataPublicacao
		}
	);
	noticia.save(function (err) {
		if (err) {
			return next(err);
		}
		res.send('Notícia criada com sucesso')
	})
};