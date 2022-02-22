//requiero la función Router del objeto express
const {Router} = require ('express');
const multer = require('multer');
const path = require('path');

//guardo la función Router en la constante routes
const routes = Router();
const pathProductsImages = path.resolve(__dirname, '../../public/images/products');

//requiero los controladores
const controllersAdmin = require('../controllers/controllersAdmin');

//*** Configura el storage (destination, filename) ***/
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, pathProductsImages);
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})
//*** Genera middleware upload ***/
var upload = multer({storage})

//realizo las renderizaciones del main
routes.get ("/adminProduct", controllersAdmin.product);
routes.get ("/productCreate", controllersAdmin.create);
routes.post('/productCreate', upload.single('image'), controllersAdmin.save);
routes.get('/productDetail/:id', controllersAdmin.show);
routes.get ("/productEdit", controllersAdmin.edit);

module.exports = routes;