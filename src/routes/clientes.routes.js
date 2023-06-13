var express = require('express');
var router = express.Router();
const Clientes = require('../controller/clientes.controller')

/* Mostrar clientes */ 
router.get('/', function (req, res, next) {
    Clientes.listar()
    .then((resultado) => {
        res.status(200).json({"status": 200, "data": resultado})
    })
    .catch((error) => {
        reject(error)
    })
});

/* Agregar Clientes */
router.post('/agregar', function (req, res, next) {
    Clientes.agregar(req.body)
    .then((resultado) => {
        res.status(200).json({status: 200, mensaje: resultado})
    })
    .catch((error) => {
        res.status(400).json({status: 400, mensaje: error})
    })
})

module.exports = router;