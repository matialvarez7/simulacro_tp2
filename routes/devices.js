var express = require('express');
var router = express.Router();
const Device = require('../src/repositories/devices');
const validLength = 12;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json()
});

router.get('/:id/channels', async function(req, res, next){
    res.json(await Device.existInFavorites(req.params.id, 3))
})

// Dar de alta un dispositivo
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

// Agregar un canal a favoritos del dispositivo
router.post('/:id/favorites', async function(req, res, next){
    
    let myDevice = await Device.idByPkExist(req.params.id);
    if(!myDevice){
        res.status(404).json({
            message: "DEVICE_NOT_FOUND"
        })
    }

    let myChannels = await Device.hasTheChannel(req.params.id, req.body.channelId)
    if(!myChannels){
        return res.status(400).json({
            message: "DEVICE_DOES_NOT_HAVE_THE_CHANNEL"
        })
    }

    if(await Device.existInFavorites(req.params.id, req.body.channelId)){
        res.status(400).json({
            message: "CHANNEL_ALREADY_EXIST_IN_FAVORITES"
        })
    }

    try {
        await Device.addChannelToFavorites(req.params.id, req.body.channelId)
        return res.status(201).json({message: 'CHANNEL_ADDED_SUCCESSFULLY'})
      } catch (error) {
          console.log(error);
          return res.status(500).json({message: 'error'})
      }


});

// Listar los favoritos de un dispositivo
router.get('/:id/favorites', async function(req, res, next){
    res.json(await Device.getAllFavorites(req.params.id));
});

// Borrar un dispostivo
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
