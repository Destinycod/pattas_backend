const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

const ProductManager = require('./managers/productManager.js');

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, ()=>console.log("Listening on port 8080"));

app.engine('handlebars',handlebars.engine()); //engine tiene como parámetros la extensión del archivo a usar y la función de callback de motor de plantilla (filepath,{options},callback)
app.set('views','./views') //para mostrar las vistas
app.set('view engine', 'handlebars')


//let productService = new ProductManager();

app.get('/products', (req,res)=>{ //colocamos el objeto que se encuentra en la plantilla users
    //let products = llamadaFileSystem;
    let products = new ProductManager();
    res.send(products)
    res.render('products',{ //Cuando se haga el render de la vista home, los productos que se le van a mandar son los del file system
        products:products
    }) 
})

app.post('/products', (req,res)=>{ 
    res.render('products') //Es la vista que queremos mostrar
})





/*
1) Consigna:  
Utilizando la misma API de productos del proyecto entregable de la clase anterior, construir un web server 
(no REST) que incorpore:
a) Un formulario de carga de productos en la ruta raíz (configurar la ruta '/productos' para recibir el POST, 
y redirigir al mismo formulario).
b) Una vista de los productos cargados (utilizando plantillas de handlebars) en la ruta GET '/productos'.
c) Ambas páginas contarán con un botón que redirija a la otra.

2) Manteniendo la misma funcionalidad reemplazar el motor de plantillas handlebars por pug.

3) Manteniendo la misma funcionalidad reemplazar el motor de plantillas handlebars por ejs.

4) Por escrito, indicar cuál de los tres motores de plantillas prefieres para tu proyecto y por qué.

*/
