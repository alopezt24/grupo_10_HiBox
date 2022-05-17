const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/usersAPIController');

//Rutas
//Listado de películas
router.get('/', usersAPIController.list);
//Detalle de una película
router.get('/:id', usersAPIController.detail);
//Filtrar películas por rating. Puede colocar desde 1 hasta 10
router.get('/recomended/:rating', usersAPIController.recomended);
//Agregar una película
router.post('/create', usersAPIController.create);
//Modificar una película
router.put('/update/:id', usersAPIController.update);
//Eliminar una película
router.delete('/delete/:id', usersAPIController.destroy);

module.exports = router;