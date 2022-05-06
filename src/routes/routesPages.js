//requiero la función Router del objeto express
const {Router} = require ('express');

//guardo la función Router en la constante routes
const routes = Router();

//requiero los controladores
const controllersPages = require('../controllers/controllersPages');

routes.get ("/about", controllersPages.about);
routes.get ("/faqs", controllersPages.faqs);
routes.get ("/contact-us", controllersPages.contactUs);


module.exports = routes;