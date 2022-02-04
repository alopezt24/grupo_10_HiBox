//requiero la función Router del objeto express
const {Router} = require ('express');

//guardo la función Router en la constante routes
const routes = Router();

//requiero los controladores
const routesProduct = require('../controllers/controllersProduct');

//realizo las renderizaciones de products
routes.get ("/products/productDetail", routesProduct.detalle);
routes.get ("/products/productCart", routesProduct.cart);
routes.get ("/products/productCreate", routesProduct.create);
routes.get ("/products/productEdit", routesProduct.edit);

module.exports = routes;