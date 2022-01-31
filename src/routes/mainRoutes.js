//requiero la función Router del objeto express
const {Router} = require ('express');

//guardo la función Router en la constante routes
const routes = Router();

//requiero los controladores
const routesMain = require('../controllers/controllersMain');
const routesProduct = require('../controllers/controllersProduct');
const routesUsers = require('../controllers/controllersUsers');

//realizo las renderizaciones del main
routes.get ("/", routesMain.index);
routes.get ("/productCart", routesMain.cart);

//realizo las renderizaciones de products
routes.get ("/products/productDetail", routesProduct.detalle);

//realizo las renderizaciones de users
routes.get ("/users/register", routesUsers.register);
routes.get ("/users/login", routesUsers.login);

//realizo las renderizacion al main para not found
routes.get ('*', routesMain.notFound);

module.exports = routes;