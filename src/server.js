const express=require("express");

const app = express();

const server = app.listen(8080,()=>{
    console.log("Listening");
})


const productManager = require ('./productManager.js');

const productService = new productManager();

app.get("/", (req,res)=>{
    res.send('<h1>Inicio</h1>');
})

app.get("/getProducts", (req,res)=>{
    res.send(
        (productService.getAll().then(result=>console.log(result)))
    )
})

app.get("/productRandom", (req,res)=>{
    res.send(
        productService.getById(Math.floor(Math.random())+1).then(result=>console.log(result))
    )
})
