//requiero la función Router del objeto express
const {Router} = require ('express');
const multer = require('multer');
const path = require('path');

//guardo la función Router en la constante routes
const routes = Router();
const pathProductsImages = path.resolve(__dirname, '../../public/images/products');

//requiero los controladores
const controllersProduct = require('../controllers/controllersProduct');

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
var upload = multer({storage: storage})

//realizo las renderizaciones de products
routes.get ("/", controllersProduct.index);
routes.get ("/productDetail", controllersProduct.detail);
routes.get ("/productCart", controllersProduct.cart);
routes.get ("/productCreate", controllersProduct.create);
routes.get ("/productEdit", controllersProduct.edit);

module.exports = routes;