const fs = require('fs');

const pathToProducts = __dirname+'/../files/products'

class ProductManager {
    addProduct = async (product) => {
        if (fs.existsSync(pathToProducts)) {
            console.log("existe");
            try {
                let data = await fs.promises.readFile(pathToProducts, 'utf-8');
                let products = JSON.parse(data);
                if (products.length === 0) {
                    //Is the first product
                    product.id = 1;
                    products.push(product);
                    await fs.promises.writeFile(pathToProducts, JSON.stringify(products, null, 2))
                    return { status: "success", message: "Added 1 product" }
                }
                product.id = products[products.length - 1].id + 1;
                products.push(product);
                await fs.promises.writeFile(pathToProducts, JSON.stringify(products, null, 2));
                return { status: "success", message: "Added 1 product" }
            }
            catch(error){
                return {status:"error",error:error}
            }
        }
        else{
            try{
                product.id=1;
                await fs.promises.writeFile(pathToProducts,JSON.stringify([product],null,2));
                return {status:"success",message:"Added 1 product"}
            }catch(error){
                return {status:"error",error:error}
            }
        }
    }
    getAllProducts = async() =>{
        if(fs.existsSync(pathToProducts)){
            try{
                let data = await fs.promises.readFile(pathToProducts, 'utf-8');
                let products = JSON.parse(data);
                return {status:"success",payload:products}
            }catch(error){
                return {status:"error",error:error}
            }
        }else{
            return {status:"success",payload:[]}
        }
    }
    getById = async (id) =>{
        if(!id) return {status:"error", error:"ID Product needed"}
        if(fs.existsSync(pathToProducts)){
            try{
                let data = await FileSystem.promises.readFile(pathToFile,'utf-8');
                let products = JSON.parse(data);
                let product = products.find(prod => prod.id == id);
                if(product) return {status:"succes",payload:product}
            }
            catch(error){
                return {status:"error",error:error}
            }
        }
        else {
            return {status:"error", error:"Product not found"}
        }
    }
    updateById = async (id) =>{
        if(!id) return {status:"error", error:"ID Product needed"}
        if(fs.existsSync(pathToProducts)){
            try{
                let data = await FileSystem.promises.readFile(pathToFile,'utf-8');
                let products = JSON.parse(data);
                let newProducts = products.filter(prod=>prod.id!==id);
                await FileSystem.promises.writeFile(pathToFile,JSON.stringify(newProducts,null,2));
                
                product.id = products[products.length - 1].id + 1;
                products.push(product);
                await fs.promises.writeFile(pathToProducts, JSON.stringify(products, null, 2));
                return { status: "success", message: "Added 1 product" }
            }
            catch(error){
                return {status:"error",error:error}
            }
        }
        else {
            return {status:"error", error:"Product not found"}
        }
    }
    deleteById = async (id) =>{
        if(!id) return {status:"error", error:"ID Product needed"}
        if(fs.existsSync(pathToProducts)){
            try{
                let data = await FileSystem.promises.readFile(pathToFile,'utf-8');
                let products = JSON.parse(data);
                let newProducts = products.filter(prod=>prod.id!==id);
                await FileSystem.promises.writeFile(pathToFile,JSON.stringify(newProducts,null,2));
                return {status:"success", message:"Product deleted"}
            }
            catch(error){
                return {status:"error",error:error}
            }
        }
        else {
            return {status:"error", error:"Product not found"}
        }
    }
}
module.exports = ProductManager;