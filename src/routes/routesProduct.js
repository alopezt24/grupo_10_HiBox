//requiero la función Router del objeto express
const {Router} = require ('express');

//guardo la función Router en la constante routes
const routes = Router();

//requiero los controladores
const controllersProduct = require('../controllers/controllersProduct');

//realizo las renderizaciones de products
routes.get ("/productDetail", controllersProduct.detalle);
routes.get ("/productCart", controllersProduct.cart);
routes.get ("/productCreate", controllersProduct.create);
routes.get ("/productEdit", controllersProduct.edit);

module.exports = routes;