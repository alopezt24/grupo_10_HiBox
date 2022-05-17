const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

//Rutas
//Listado de todos los productos
router.get('/', productsAPIController.list);
//Detalle del productos
router.get('/:id', productsAPIController.detail);
//En que peliculas trabajo el actor con id tal
// router.get('/:id/movies', productsAPIController.actorMovies);

//Agregar un actor
router.post('/create', productsAPIController.create);
//Modificar un actor
router.put('/update/:id', productsAPIController.update);
//Eliminar un actor
router.delete('/delete/:id', productsAPIController.destroy);

module.exports = router;