//requiero la función Router del objeto express
const {Router} = require ('express');

//guardo la función Router en la constante routes
const routes = Router();

//requiero los controladores
const controllersUsers = require('../controllers/controllersUsers');

//*** Configura el storage (destination, filename) ***/
const middlewareStorage = require('../middlewares/middlewareStorage');
const upload = middlewareStorage('user');

//realizo las renderizaciones de users
routes.get ("/register", controllersUsers.register);
routes.get ("/login", controllersUsers.login);

module.exports = routes;