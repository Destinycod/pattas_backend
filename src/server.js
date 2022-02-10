const express=require("express");
const productsRouter = require('./routes/products');

const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use('/products',productsRouter);
app.use(express.static(__dirname+'/public'))  //dirname -> un elemento que permite trabajar con una ruta absoluta

const PORT=8080;
const server = app.listen(PORT,()=>{
    console.log("Listening");
})

