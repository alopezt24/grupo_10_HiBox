//requerimos el modulo de path
const path = require ("path");

//requerimos el modulo de express (terceros);
const express = require ("express");

//adentro de app --> aplicacion express
const app = express();

//definimos el puerto una vez, para usarlo las veces necesarias
const port = 3030;

//requiero las rutas
const routesMain = require("./routes/mainRoutes");
const routesProduct = require("./routes/productRoutes");
const routesUsers = require("./routes/usersRoutes");

//definimos las constantes de path
const pathPublic = path.resolve(__dirname, "../public");
const pathEngineViews = path.resolve(__dirname, "./views");

//mediante use le asigno la carpeta "public" al proyecto para alojar todos los elementos estaticos (imagenes / css)
app.use(express.static(pathPublic));

//mediante set indico el Engine a utilizar y la carpeta de views
app.set('view engine', 'ejs');
app.set('views', pathEngineViews);

//funcion para ejecutar el servidor en un puerto especifico (+ callback)
app.listen (port, () =>{
    console.log ("Estoy escuchando en el puerto ", port)
});

app.use ('/', routesMain);
app.use ('/users/', routesUsers);
app.use ('/products/', routesProduct);

app.use((req,res,next) => {
    res.status(404).render('not-found')
});