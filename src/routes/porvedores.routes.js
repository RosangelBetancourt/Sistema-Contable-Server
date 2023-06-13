var express = require('express');
var router = express.Router();
const Provedores = require('../controller/porvedores.controller')

/* Mostrar provedores */ 
router.get('/', function (req, res, next) {
    Provedores.listar()
    .then((resultado) => {
        res.status(200).json({"status": 200, "data": resultado})
    })
    .catch((error) => {
        reject(error)
    })
});

/* Agregar Clientes */
router.post('/agregar', function (req, res, next) {
    Provedores.agregar(req.body)
    .then((resultado) => {
        res.status(200).json({status: 200, mensaje: resultado})
    })
    .catch((error) => {
        res.status(400).json({status: 400, mensaje: error})
    })
})


module.exports = router;