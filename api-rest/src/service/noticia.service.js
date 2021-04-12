const Noticia = require('../model/noticia.model');
const errorHandler = require('../core/error');

async function create(req, res, next) {
	validateRequestParams(req);

	let noticia = new Noticia({
		titulo: req.body.titulo,
		conteudo: req.body.conteudo,
		dataPublicacao: req.body.dataPublicacao
	});

	return await noticia.save((err) => {
		if (err) return next(err);
		res.send('Notícia criada com sucesso')
	})
}

async function updateById(req, res, next) {
	validateRequestId(req);

	return await Noticia.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
		if (err) return next(err);
		res.send('Notícia atualizada com sucesso');
	});
}

async function findById(req, res, next) {
	validateRequestId(req);

	return await Noticia.findById(req.params.id, (err, noticia) => {
		if (err) return next(err);
		res.send(noticia);
	})
}

async function findByTitulo(req, res, next) {
	validateRequestTitulo(req);

	return await Noticia.find(req.params, (err, noticia) => {
		if (err) return next(err);
		res.send(noticia);
	})
}

async function findAll(req, res, next) {
	return await Noticia.find((err, noticias) => {
		if (err) return next(err);
		res.send(noticias);
	})
}

async function deleteById(req, res, next) {
	validateRequestId(req);

	return await Noticia.findByIdAndRemove(req.params.id, (err) => {
		if (err) return next(err);
		res.send('Notícia deletada com sucesso');
	})
}

function validateRequestId(req) {
	if (!req.params.id) {
		throw errorHandler.preconditionFailed("O id precisa ser informado.");
	}
	return true;
}

function validateRequestTitulo(req) {
	if (!req.params.titulo) {
		throw errorHandler.preconditionFailed("O titulo precisa ser informado.");
	}
	return true;
}

function validateRequestParams(req) {
	if (!req.body.titulo && !req.body.conteudo && !req.body.dataPublicacao) {
		throw errorHandler.preconditionFailed("Os parâmetros titulo, conteudo e dataPublicacao são obrigatórios.");
	}
	return true;
}

module.exports = {
	create,
	updateById,
	findById,
	findByTitulo,
	findAll,
	deleteById,
	validateRequestId,
	validateRequestTitulo,
	validateRequestParams
}

