const express = require('express');
const noticiaController = require('../controller/noticia.controller');

const router = express.Router();

router.get('/', noticiaController.findAll);

router.get('/:id', noticiaController.findById);

router.post('/create', noticiaController.create);

router.put('/update/:id', noticiaController.update);

router.delete('/delete/:id', noticiaController.delete);

module.exports = router;