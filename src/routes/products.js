const express=require("express");
const router=express.Router();
const uploader = require("../services/upload")
const productManager = require ('../managers/productManager.js');
const productService = new productManager();

router.get("/", (req,res)=>{
    productService.getAllProducts().then(result=>res.send(result))
})

router.get("/", (req,res)=>{
    productService.getById().then(result=>res.send(result))
})

router.post("/", uploader.single('file'),(req,res)=>{
    let product = req.body;
    let file = req.file;
    if(!file)  return res.status(500).send({error:"Couldn't upload file"})
    product.thumbnail = req.protocol+"://"+req.hostname+":8080/img/"+file.filename;
    productService.addProduct(product).then(result=>res.send(result));
})

router.put("/", (req,res)=>{ //recibe y actualiza un producto por id

})

router.delete("/", (req,res)=>{ //
    
})

module.exports=router;