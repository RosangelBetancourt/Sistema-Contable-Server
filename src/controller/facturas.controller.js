const { facturas } = require('../data/data');
const { v4: uuidv4 } = require('uuid');

class Factura {

    agregar(factura) {
        return new Promise ((resolve, reject) => {
            if (!factura.Hora || !factura.Fecha || !factura.Monto_total || !factura.Monto_venta || !factura.IVA || !factura.Tasa || !factura.Referencia) {
                reject('Faltan propiedades escenciales: Hora, Fecha, Monto_total, Monto_venta, IVA, Tasa o Referencia')
            } else {
                if (Number(factura.Monto_venta) + Number(factura.IVA) === Number(factura.Monto_total)) {
                    const nuevaFactura = {
                        id: uuidv4(),
                        Hora: factura.Hora,
                        Fecha: factura.Fecha,
                        Monto_total: factura.Monto_total,
                        Monto_venta: factura.Monto_venta,
                        IVA: factura.IVA,
                        Tasa: factura.Tasa,
                        Referencia: factura.Referencia
                    }
        
                    facturas.push(nuevaFactura);
                    resolve('Se ha agregado exitosamente la Factura')
                }
    
                reject('No se creo la nueva factura, ya que el Monto_venta más el IVA, no coinciden con el Monto_total')
            }
        })
    }

    listar(){
        return new Promise ((resolve, reject) => {
            const resultado = facturas

            resolve(resultado);
        })
    }

    listarFecha(fecha) {
        return new Promise ((resolve, reject) => {
            const resultado = []

            facturas.forEach(factura => {
                if (factura.Fecha === fecha) {
                    resultado.push(factura)
                }
            });

            if (resultado.length === 0) {
                reject('No existen facturas en la fecha enviada')
            }

            resolve(resultado);
        })
    }

    eliminar(id) {
        return new Promise ((resolve, reject) => {

            for (let i = 0; i < facturas.length; i++) {
                if (id === facturas[i].id) {
                    facturas.splice(i, 1)

                    resolve('Se ha eliminado exitosamente la factura')
                }
            }

            reject('No existe una factura con el id indicado para eliminar')
        })
    }
}

const facturasC = new Factura();
module.exports = facturasC;