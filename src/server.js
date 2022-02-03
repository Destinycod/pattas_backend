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
        (productService.getAll())
    )
})

app.get("/productRandom", (req,res)=>{
    res.send(
        Math.floor(Math.random())
    )
})
