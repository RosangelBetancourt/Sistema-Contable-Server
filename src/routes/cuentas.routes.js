var express = require('express');
var router = express.Router();
const Cuentas = require('../controller/cuentas.controller')

/* mostrar las cuentas */
router.get('/', function (req, res, next) {
    Cuentas.listar()
    .then((resultado) => {
        res.status(200).json({"status": 200, "data": resultado})
    })
    .catch((error) => {
        reject(error)
    })
});

/* Agregar Cuentas */
router.post('/agregar', function (req, res, next) {
    Cuentas.agregar(req.body)
    .then((resultado) => {
        res.status(200).json({status: 200, mensaje: resultado})
    })
    .catch((error) => {
        res.status(400).json({"status": 400, mensaje: error})
    })
})

/* Editar Cuentas */
router.put('/editar/:id', function (req, res, next) {

    const { id } = req.params

    Cuentas.editar(req.body, id)
    .then((resultado) => {
        res.status(200).json({status: 200, mensaje: resultado})
    })
    .catch((error) => {
        res.status(400).json({"status": 400, mensaje: error})
    })
})

/* Eliminar Cuentas */
router.delete('/eliminar/:id', function (req, res, next) {

    const { id } = req.params

    Cuentas.eliminar(id)
    .then((resultado) => {
        res.status(200).json({status: 200, mensaje: resultado})
    })
    .catch((error) => {
        res.status(400).json({status: 400, mensaje: error})
    })
})

module.exports = router;