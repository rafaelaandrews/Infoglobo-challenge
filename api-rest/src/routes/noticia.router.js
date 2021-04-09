const express = require('express');
const router = express.Router();
const noticiaController = require('../controller/noticia.controller');

//router.get('/', noticiaController.getAll);
router.post('/create', noticiaController.create);
//router.put('/update', noticiaController.update);
//router.delete('/delete', noticiaController.delete);

module.exports = router;