const express = require('express');
const fs = require('fs');
const app = express();
const PORT=8080;
const server = app.listen(PORT,()=>{
    console.log("Listening");
})

const pathToProducts = __dirname+'/files/products';

app.engine('handlebars',(pathToProducts,ObjectToReplace,callback)=>{
    fs.readFile(pathToProducts,(err,content)=>{
        if(err) return callback(new Error(err))
        const template = content.toString()
        .replace("^^titulo$$",''+ObjectToReplace.titulo)
        .replace("^^mensaje$$",''+ObjectToReplace.mensaje)
        return callback(null,template);
    })
})

app.set('views','./views')
app.set('view engine','handlebars')

app.get('/products',(req,res)=>{
    res.render('Productos',{
        titulo:"PLANTILLA PROPIA",
        mensaje:"Hola plantilla propia"
    })
})

app.post('/products',(req,rest)=>{
    
})