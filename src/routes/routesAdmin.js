//requiero la función Router del objeto express
const {Router} = require ('express');

//guardo la función Router en la constante routes
const routes = Router();

//requiero los controladores
const controllersAdmin = require('../controllers/controllersAdmin');

//realizo las renderizaciones del main
routes.get ("/adminProduct", controllersAdmin.product);

module.exports = routes;