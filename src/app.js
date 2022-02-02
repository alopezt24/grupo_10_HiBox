//requerimos el modulo de path
const path = require ("path");

//requerimos el modulo de express (terceros);
const express = require ("express");

//adentro de app --> aplicacion express
const app = express();

//definimos el puerto una vez, para usarlo las veces necesarias
const port = 3030;

//requiero las rutas
const routes = require("./routes/mainRoutes");

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

app.use ('/', routes);
app.use ('/users/', routes);
app.use ('/products/', routes);
app.use ('*', routes);