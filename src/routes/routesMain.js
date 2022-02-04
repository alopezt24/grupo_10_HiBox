//requiero la función Router del objeto express
const {Router} = require ('express');

//guardo la función Router en la constante routes
const routes = Router();

//requiero los controladores
const routesMain = require('../controllers/controllersMain');

//realizo las renderizaciones del main
routes.get ("/", routesMain.index);

module.exports = routes;