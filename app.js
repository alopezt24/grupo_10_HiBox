//requerimos el modulo de path
const path = require ("path");

//requerimos el modulo de express (terceros);
const express = require ("express");

//adentro de app --> aplicacion express
const app = express();

//definimos el puerto una vez, para usarlo las veces necesarias
const port = 3030

//mediante use le asigno la carpeta "public" al proyecto para alojar todos los elementos estaticos (imagenes / css)
app.use(express.static("public")); 

//funcion para ejecutar el servidor en un puerto especifico (+ callback)
app.listen (port, () =>{
    console.log ("Estoy escuchando en el puerto ", port)
});

app.get ("/", (req , res) => {
    res.sendFile(path.resolve ("./views/index.html"));
})

app.get ("*", (req , res) => {
    res.sendFile(path.resolve ("./views/not-found.html"));
})