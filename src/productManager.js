const FileSystem = require('fs');

//const pathToFile = '../files/productos.json';

const pathToFile = '../files/products.txt'

class productManager{
    save = async (product) =>{
        if(!product.title||!product.price||!product.thumbnail){
            return {status:"error", error:"missing file"}
        }
        try{
            if(FileSystem.existsSync(pathToFile)){
                let data = await FileSystem.promises.readFile(pathToFile,'utf-8');
                let products = JSON.parse(data);
                let id = products[products.length-1].id+1;
                product.id=id;
                products.push(product);
                await FileSystem.promises.writeFile(pathToFile,JSON.stringify(products,null,2));
                return {status:"succes",message:"product created"}
            }
            else{
                product.id=1;
                await FileSystem.promises.writeFile(pathToFile,JSON.stringify([product],null,2));
                return {status:"succes",message:"product created"}
            }
        }
        catch(error){
            return {status:"succes",message:error}
        }
    }
    getAll = async () =>{
        if(FileSystem.existsSync(pathToFile)){
            let data = await FileSystem.promises.readFile(pathToFile,'utf-8');
            let products = JSON.parse(data);
            return {status:"succes",payload:products}
        }
    }
    getById = async (id) =>{
        if(!id) return {status:"error", error:"ID Product needed"}
        if(FileSystem.existsSync(pathToFile)){
            let data = await FileSystem.promises.readFile(pathToFile,'utf-8');
            let products = JSON.parse(data);
            let product = products.find(prod => prod.id == id);
            if(product) return {status:"succes",payload:product}
            else return {status:"error", error:"Product not found"}
        }
    }
    deleteAll = () =>{
        if(FileSystem.existsSync(pathToFile)){
            FileSystem.unlink(pathToFile, error =>{
                if(error) return {status:"error", error:"File can not delete"}
                else return {status:"success", message:"File deleted"}
            })
        }
        else return {status:"error", error:"File does not exist"}
    }
    deleteById = async (id) =>{
        if(!id) return {status:"error", error:"ID Product needed"}
        if(FileSystem.existsSync(pathToFile)){
            let data = await FileSystem.promises.readFile(pathToFile,'utf-8');
            let products = JSON.parse(data);
            let newProducts = products.filter(prod=>prod.id!==id);
            await FileSystem.promises.writeFile(pathToFile,JSON.stringify(newProducts,null,2));
            return {status:"success", message:"Product deleted"}
        }
    }
}

module.exports = productManager;