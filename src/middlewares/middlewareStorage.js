const multer = require('multer');
const path = require('path');

function returnStorage (name) {

    switch (name) {
        case 'product':
            var storage = multer.diskStorage({
                destination:function(req,file,cb){
                    cb(null, path.resolve(__dirname, '../../public/images/products'));
                },
                filename: function(req,file,cb){
                    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
                }
            });        
            break;

        case 'user':
            var storage = multer.diskStorage({
                destination:function(req,file,cb){
                    cb(null, path.resolve(__dirname, '../../public/images/users'));
                },
                filename: function(req,file,cb){
                    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
                }
            });        
            break;
    
        default:
            break;
    }
    return multer({storage});
}

module.exports = returnStorage;