var express = require('express');
var router = express.Router();
const Device = require('../src/repositories/devices');
const validLength = 12;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json()
});

router.post('/', async function(req, res, next) {
    
    // Verifico que no me pase nada por parámetro
    if(req.body.identifier == undefined){
        return res.status(400).json({
            message: "IDENTIFIER_MISSING"
        })
    }

    // verificar que no exista el código en la base de datos
    if(await Device.identifierExist(req.body.identifier)){
        return res.status(400).json({
            message: "DEVICE_EXIST"
        })
    }

    // verificar que la cantidad de caracteres del identifier sea 12
    if(req.body.identifier.length != validLength){
        return res.status(400).json({
            message: "IDENTIFIER_INVALID"
        })
    }

    try{
        await Device.newDevice(req.body.identifier)
        res.status(201).json({
            message: "NEW_DEVICE_CREATED"
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message: "error"
        })
    }
});

router.delete('/:identifier', async function(req, res, next) {
    
    let dropDevice = await Device.identifierExist(req.params.identifier); 
    
    if(dropDevice){
        await Device.deleteDevice(req.params.identifier)
        res.status(200).json({
            message: "DEVICE_DELETED"
        })
    }
    else{
        res.status(404).json({
            message: "DEVICE_NOT_FOUND"
        })
    }
    
});

module.exports = router;
