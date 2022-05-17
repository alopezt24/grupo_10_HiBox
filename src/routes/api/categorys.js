const express = require('express');
const router = express.Router();
const CategorysAPIController = require('../../controllers/api/categorysAPIController');

//Rutas
//Listado de todos los generos
router.get('/', categorysAPIController.list);
//Detalle del genero
router.get('/:id', categorysAPIController.detail);
//Películas por genero
// router.get('/:id/movies', categorysAPIController.genreMovies);

module.exports = router;