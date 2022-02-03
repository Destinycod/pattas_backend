const productManager = require ('./productManager.js');

const productService = new productManager();

let product={
    title:'title1',
    price:1000,
    thumbnail:'url'
}

productService.save(product).then(result=>console.log(result));
//productService.getAll().then(result=>console.log(result));
//productService.getById(3).then(result=>console.log(result));
productService.deleteAll().then(result=>console.log(result));
productService.deleteById(2).then(result=>console.log(result));