const { productos } = require('../data/data');
const { v4: uuidv4 } = require('uuid');

class Producto {

    agregar(producto) {
        return new Promise ((resolve, reject) => {
            if (!producto.Nombre) {
                reject('Faltan propiedades escenciales: Nombre')
            } else {
                const nuevoProducto = {
                    id: uuidv4(),
                    Nombre: producto.Nombre,
                }
    
                productos.push(nuevoProducto);
                resolve('Se ha agregado exitosamente el producto')
            }

        })
    }

    listar(){
        return new Promise ((resolve, reject) => {
            const resultado = productos

            resolve(resultado);
        })
    }

    eliminar(id) {
        return new Promise ((resolve, reject) => {

            for (let i = 0; i < productos.length; i++) {
                if (id === productos[i].id) {
                    productos.splice(i, 1)

                    resolve('Se ha eliminado exitosamente la producto')
                }
            }

            reject('No existe una producto con el id indicado para eliminar')
        })
    }
}

const productosC = new Producto();
module.exports = productosC;