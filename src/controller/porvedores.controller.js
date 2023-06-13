const { provedores } = require('../data/data');
const { v4: uuidv4 } = require('uuid');

class Provedor {

    agregar(provedor) {
        return new Promise ((resolve, reject) => {
            if (!provedor.Nombre || !provedor.Rif || !provedor.Telefono || !provedor.Direccion) {
                reject('Faltan propiedades escenciales: Direccion, Telefono, Rif o Nombre')
            } else {
                const nuevoprovedor = {
                    id: uuidv4(),
                    Nombre: provedor.Nombre,
                    Rif: provedor.Rif,
                    Telefono: provedor.Telefono,
                    Direccion: provedor.Direccion
                }
    
                provedores.push(nuevoprovedor);
                resolve('Se ha agregado exitosamente el provedor')
            }
        })
    }

    listar(){
        return new Promise ((resolve, reject) => {
            const resultado = provedores

            resolve(resultado);
        })
    }
}

const provedoresC = new Provedor();
module.exports = provedoresC;