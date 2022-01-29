class Usuario{
    constructor(nombre, apellido, libros=[], mascotas=[]){
        this.nombre = nombre;
        this.apellido=apellido;
        this.libros=libros;
        this.mascotas=mascotas;
    }
    
    getFullName(){
        console.log(`${this.nombre} ${this.apellido}`);
    }

    addMascota(mascota){ //void
        this.mascotas.push(mascota);
    }
    
    countMascotas(){
        let contador=0;
        for(const element of this.mascotas){
            contador=contador+1;
        }
        console.log(contador);
    }
    
    addBook(nombreLibro, autorLibro){// void
        this.libros.push({autor:autorLibro, libro:nombreLibro});
    }
    
    getBookNames(){
        let nombresLibros=[];
        for(const element of this.libros){
            nombresLibros.push(element.libro);
        }
        for(const element of nombresLibros){
            console.log(element);
        }
        
    }
}


const usuario1 = new Usuario("Pepe", "Argento",[{autor:"autor1", libro:"libro1"},{autor:"autor2", libro: "libro2"}],["perro","gato","loro"]);

usuario1.getFullName();
usuario1.countMascotas();
usuario1.addMascota("hamster");
usuario1.addBook("autor3","libro3");
usuario1.getBookNames();

