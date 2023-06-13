var express = require('express');
var router = express.Router();
const Facturas = require('../controller/facturas.controller')

/* Mostrar todas las facturas */
router.get('/', function (req, res, next) {
    Facturas.listar()
    .then((resultado) => {
        res.status(200).json({"status": 200, "data": resultado})
    })
    .catch((error) => {
        reject(error)
    })
})

/* Mostar facturas de una fecha especifica */
router.get('/:fecha', function (req, res, next) {
    const { fecha } = req.params

    Facturas.listarFecha(fecha)
    .then((resultado) => {
        res.status(200).json({"status": 200, "data": resultado})
    })
    .catch((error) => {
        res.status(400).json({status: 400, mensaje: error})
    })
})

/* Agregar Facturas */
router.post('/agregar', function (req, res, next) {
    Facturas.agregar(req.body)
    .then((resultado) => {
        res.status(200).json({status: 200, mensaje: resultado})
    })
    .catch((error) => {
        res.status(400).json({"status": 400, mensaje: error})
    })
})

/* Eliminar Facturas */
router.delete('/eliminar/:id', function (req, res, next) {

    const { id } = req.params

    Facturas.eliminar(id)
    .then((resultado) => {
        res.status(200).json({status: 200, mensaje: resultado})
    })
    .catch((error) => {
        res.status(400).json({status: 400, mensaje: error})
    })
})

module.exports = router;