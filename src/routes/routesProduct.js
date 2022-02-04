//requiero la función Router del objeto express
const {Router} = require ('express');

//guardo la función Router en la constante routes
const routes = Router();

//requiero los controladores
const routesProduct = require('../controllers/controllersProduct');

//realizo las renderizaciones de products
routes.get ("/productDetail", routesProduct.detalle);
routes.get ("/productCart", routesProduct.cart);
routes.get ("/productCreate", routesProduct.create);
routes.get ("/productEdit", routesProduct.edit);

module.exports = routes;