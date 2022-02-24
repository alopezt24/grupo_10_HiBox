//requiero la función Router del objeto express
const {Router} = require ('express');

//guardo la función Router en la constante routes
const routes = Router();

//requiero los controladores
const controllersAdmin = require('../controllers/controllersAdmin');

//*** Configura el storage (destination, filename) ***/
const middlewareStorage = require('../middlewares/middlewareStorage');
const upload = middlewareStorage('product');

//realizo las renderizaciones del main
routes.get ("/adminProduct", controllersAdmin.product);
routes.get ("/productCreate", controllersAdmin.create);
routes.post('/productCreate', upload.single('image'), controllersAdmin.save);
routes.get('/productDetail/:id', controllersAdmin.show);
routes.get ("/productEdit", controllersAdmin.edit);
routes.delete('/:id', controllersAdmin.erase);
module.exports = routes;