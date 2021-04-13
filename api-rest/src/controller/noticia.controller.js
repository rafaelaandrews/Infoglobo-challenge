const noticiaService = require('../service/noticia.service');

exports.create = async (req, next) => {
	try {
		await noticiaService.create(req, res, next);
	
		res.status(201).send('Notícia criada com sucesso');
	} catch (error) {
		next(error);
	}
};

exports.findById = async (req, next) => {
	try {
		let result = await noticiaService.findById(req, res, next);
	
		res.status(200).send(result);
	} catch (error) {
		next(error);
	}
};

exports.findByTitulo = async (req, next) => {
	try {
		let result = await noticiaService.findByTitulo(req, res, next);
	
		res.status(200).send(result);
	} catch (error) {
		next(error);
	}
};

exports.findAll = async (req, next) => {
	try {
		let result = await noticiaService.findAll(req, res, next);
	
		res.status(200).send(result);
	} catch (error) {
		next(error);
	}
};

exports.update = async (req, next) => {
	try {
		await noticiaService.updateById(req, res, next);

		res.status(200).send('Notícia atualizada com sucesso');
	} catch (error) {
		next(error);
	}
};

exports.delete = async (req, next) => {
	try {
		await noticiaService.deleteById(req, res, next);

		res.status(200).send('Notícia deletada com sucesso');
	} catch (error) {
		next(error);
	}
};
