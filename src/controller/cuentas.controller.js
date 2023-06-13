const { cuentas } = require('../data/data');
const { v4: uuidv4 } = require('uuid');

class Cuentas {

    agregar(cuenta){
        return new Promise ((resolve, reject) => {
            if (!cuenta.Nombre || !cuenta.Codigo) {
                reject('Faltan propiedades escenciales: Codigo o Nombre')
            } else {
                const nuevaCuenta = {
                    id: uuidv4(),
                    Nombre: cuenta.Nombre,
                    Codigo: cuenta.Codigo
                }
    
                cuentas.push(nuevaCuenta);
                resolve('Se ha agregado exitosamente la cuenta')
            }
        })
    }

    listar(){
        
        return new Promise ((resolve, reject) => {
            const resultado = cuentas

            resolve(resultado);
        })
    }

    editar(cuenta, id){
        return new Promise ((resolve, reject) => {
            if (!cuenta.Nombre || !cuenta.Codigo) {
                reject('Faltan propiedades escenciales: Codigo o Nombre')
            } else {
                for (let i = 0; i < cuentas.length; i++) {
                    if (id === cuentas[i].id) {
                        cuentas[i].Codigo = cuenta.Codigo;
                        cuentas[i].Nombre = cuenta.Nombre
    
                        resolve('Se ha editado exitosamente la cuenta')
                    }
                }
    
                reject('No existe una cuenta con el id indicado para editar')
            }
        })
    }

    eliminar(id) {
        return new Promise ((resolve, reject) => {

            for (let i = 0; i < cuentas.length; i++) {
                if (id === cuentas[i].id) {
                    cuentas.splice(i, 1)

                    resolve('Se ha eliminado exitosamente la cuenta')
                }
            }

            reject('No existe una cuenta con el id indicado para eliminar')
        })
    }
}

const cuentasC = new Cuentas();
module.exports = cuentasC;