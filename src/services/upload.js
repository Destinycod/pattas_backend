// Este serivicio me permite definir el middleware que me permita utilizar el multer 
// en cualquier router o endpoint que necesite

const multer = require('multer');

let storage = multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,__dirname+'/../public/img')
    },
    filename:function(req,file,callback){
        callback(null,Date.now()+"-"+file.originalname)
    }
})
const uploader = multer({storage:storage})

module.exports = uploader;