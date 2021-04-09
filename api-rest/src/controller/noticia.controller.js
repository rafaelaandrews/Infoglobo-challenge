const Noticia = require('../model/noticia.model');

exports.create = (req, res) => {
	let noticia = new Noticia(
		{
			titulo: req.body.titulo,
			conteudo: req.body.conteudo,
			dataPublicacao: req.body.dataPublicacao
		}
	);
	noticia.save((err) => {
		if (err) {
			console.log(err)
		}
		res.send('Notícia criada com sucesso')
	})
};

exports.findById = (req, res) => {
	let id = req.params.id;
	Noticia.findById(id, function (err, noticia) {
		if (err) return next(err);
		res.send(noticia);
	})
};

exports.findAll = (req, res) => {
	Noticia.find((err, noticias) => {
		if (err) {
			console.log(err)
		}
		res.send(noticias);
	})
};

exports.update = (req, res) => {
	let id = req.params.id;
	let noticia = new Noticia(
		{
			titulo: req.body.titulo,
			conteudo: req.body.conteudo,
			dataPublicacao: req.body.dataPublicacao
		}
	);
	noticia.findByIdAndUpdate(id, noticia, {new: true}, (err, newNoticia) => {
		if (err) {
			console.log(err)
		}
		res.send(newNoticia)
	})
};