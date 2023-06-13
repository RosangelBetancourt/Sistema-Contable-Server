const { clientes } = require('../data/data');
const { v4: uuidv4 } = require('uuid');

class Cliente {

    agregar(cliente) {
        return new Promise ((resolve, reject) => {
            if (!cliente.Nombre || !cliente.Apellido || !cliente.Telefono || !cliente.Direccion) {
                reject('Faltan propiedades escenciales: Direccion, Telefono, Apellido o Nombre')
            } else {
                const nuevoCliente = {
                    id: uuidv4(),
                    Nombre: cliente.Nombre,
                    Apellido: cliente.Apellido,
                    Telefono: cliente.Telefono,
                    Direccion: cliente.Direccion
                }
    
                clientes.push(nuevoCliente);
                resolve('Se ha agregado exitosamente el cliente')
            }
        })
    }

    listar(){
        return new Promise ((resolve, reject) => {
            const resultado = clientes

            resolve(resultado);
        })
    }
}

const clientesC = new Cliente();
module.exports = clientesC;