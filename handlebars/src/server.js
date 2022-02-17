const express = require('express');
const fs = require('fs');
const app = express();
const PORT=8080;
const server = app.listen(PORT,()=>{
    console.log("Listening");
})


app.engine('handlebars',(filePath,ObjectToReplace,callback)=>{
    fs.readFile(filePath,(err,content)=>{
        if(err) return callback(new Error(err))
        const template = content.toString()
        .replace("^^titulo$$",''+ObjectToReplace.titulo)
        .replace("^^mensaje$$",''+ObjectToReplace.mensaje)
        return callback(null,template);
    })
})

app.set('views','./views')
app.set('view engine','handlebars')

app.get('/',(req,res)=>{
    res.render('Productos',{
        titulo:"PLANTILLA PROPIA",
        mensaje:"Hola plantilla propia"
    })
})