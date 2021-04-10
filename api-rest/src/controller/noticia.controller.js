const noticiaService = require('../service/noticia.service');

exports.create = async (req, res, next) => {
	try {
		let result = await noticiaService.create(req, res, next);
	
		res.status(201).send(result);
	} catch (error) {
		next(error);
	}
};

exports.findById = async (req, res, next) => {
	try {
		let result = await noticiaService.findById(req, res, next);
	
		res.status(200).send(result);
	} catch (error) {
		next(error);
	}
};

exports.findAll = async (req, res, next) => {
	try {
		let result = await noticiaService.findAll(req, res, next);
	
		res.status(200).send(result);
	} catch (error) {
		next(error);
	}
};

exports.update = async (req, res, next) => {
	try {
		let result = await noticiaService.updateById(req, res, next);
	
		res.status(200).send(result);
	} catch (error) {
		next(error);
	}
};

exports.delete = async (req, res, next) => {
	try {
		let result = await noticiaService.deleteById(req, res, next);
	
		res.status(200).send(result);
	} catch (error) {
		next(error);
	}
};
