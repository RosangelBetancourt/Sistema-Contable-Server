const { v4: uuidv4 } = require('uuid');


const cuentas = [{
    id: uuidv4(),
    Codigo: '1.01.11.1',
    Nombre: 'Banco BBVA Provincial 01081234567891234567',
}];

const clientes = [{
    id: uuidv4(),
    Nombre: 'Rosangel',
    Apellido: 'Betancourt',
    Telefono: '0412556825',
    Direccion: 'Campo Alegre - Estado Trujillo'
}];

const facturas = [{
    id: uuidv4(),
    Hora: '8:00pm',
    Fecha: '28-03-2023',
    Monto_total: 100,
    Monto_venta: 80,
    IVA: 20,
    Tasa: '16%',
    Referencia: '5794'
}];

const provedores = [{
    id: uuidv4(),
    Nombre: 'Apple',
    Rif: 'J-440065895',
    Telefono: '04242658757',
    Direccion: 'EEUU - New York'
}]

const productos = [{
    id: uuidv4(),
    Nombre: 'Apple Wath'
}]


module.exports = {
    cuentas,
    clientes,
    facturas,
    provedores,
    productos
}