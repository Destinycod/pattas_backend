const express=require("express");
const router=express.Router();
const uploader = require("../services/upload")
const productManager = require ('../managers/productManager.js');
const productService = new productManager();

router.get("/", (req,res)=>{
    productService.getAllProducts().then(result=>res.send(result))
})

router.get("/:id", (req,res)=>{
    let productID = req.body.id;
    if(isNaN(productID)) return res.status(400).send({error:"Not a number"})
    let id = parseInt(productID);
    productService.getById(id).then(result=>res.send(result))
})

router.post("/", uploader.single('file'),(req,res)=>{
    let product = req.body; //llega del servidor el producto = recibe || El body es todo el objeto
    let file = req.file;
    if(!file)  return res.status(500).send({error:"Couldn't upload file"})
    product.thumbnail = req.protocol+"://"+req.hostname+":8080/img/"+file.filename;
    productService.addProduct(product).then(result=>res.send(result));
})

router.put("/:id", (req,res)=>{ //recibe y actualiza un producto por id
    let productID = req.body.id;
    if(isNaN(productID)) return res.status(400).send({error:"Not a number"})
    let id = parseInt(productID);
    let clientProductTitle = req.body.title;
    let clientProductPrice = req.body.price;
    let clientProductThumbnail = req.body.thumbnail;
    
})

router.delete("/:id", (req,res)=>{ //
    let productID = req.body.id;
    if(isNaN(productID)) return res.status(400).send({error:"Not a number"})
    let id = parseInt(productID);
    productService.deleteById(id).then(res.send("Product deleted succesfully"));
})

module.exports=router;