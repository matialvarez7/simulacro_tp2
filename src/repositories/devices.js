const {Device} = require('../../db/models');

async function identifierExist(identifier){
    return await Device.findOne({
        where:{
            identifier
        }
    }) 
}

async function newDevice(identifier){
    return await Device.create({
        identifier
    })
}

async function deleteDevice(identifier){
    
    let aux = await Device.findOne({where:{identifier}})
    
    if(aux){
        return await aux.destroy()
    }
}

module.exports = {
    identifierExist,
    newDevice,
    deleteDevice
}