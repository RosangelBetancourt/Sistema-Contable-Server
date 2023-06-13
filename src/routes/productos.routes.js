var express = require('express');
var router = express.Router();
const Productos = require('../controller/productos.controller')

/* Mostrar productos */ 
router.get('/', function (req, res, next) {
    Productos.listar()
    .then((resultado) => {
        res.status(200).json({"status": 200, "data": resultado})
    })
    .catch((error) => {
        reject(error)
    })
});

/* Agregar Productos */
router.post('/agregar', function (req, res, next) {
    Productos.agregar(req.body)
    .then((resultado) => {
        res.status(200).json({status: 200, mensaje: resultado})
    })
    .catch((error) => {
        res.status(400).json({status: 400, mensaje: error})
    })
})

/* Eliminar Productos */
router.delete('/eliminar/:id', function (req, res, next) {

    const { id } = req.params

    Productos.eliminar(id)
    .then((resultado) => {
        res.status(200).json({status: 200, mensaje: resultado})
    })
    .catch((error) => {
        res.status(400).json({status: 400, mensaje: error})
    })
})

module.exports = router;