const express = require('express');

const app = express();
const server = app.listen(8080,()=>console.log(`Listening on 8080`))

app.set('views','./views');
app.set('view engine','ejs');

const pathToProducts = __dirname+'/files/products';

app.get('/',(req,res)=>{
    res.render('hello',{
        message:"Holo todos"
    })
})
app.get('/products',(req,res)=>{
    let products = pathToProducts();
    res.render('products',{
        products
    })
})