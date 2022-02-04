//requiero la función Router del objeto express
const {Router} = require ('express');

//guardo la función Router en la constante routes
const routes = Router();

//requiero los controladores
const routesUsers = require('../controllers/controllersUsers');

//realizo las renderizaciones de users
routes.get ("/register", routesUsers.register);
routes.get ("/login", routesUsers.login);

module.exports = routes;