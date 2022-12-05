const {Device, Channel, Favorite} = require('../../db/models');

async function identifierExist(identifier){
    return await Device.findOne({
        where:{
            identifier
        }
    }) 
}

async function hasTheChannel(deviceId, channelId){
    return await Device.findOne({
        where: {id: deviceId},
        attributes: [],
        include:{
            model: Channel,
            where:{id: channelId}
        }
    })
}

async function existInFavorites(deviceId, channelId){
    return await Device.findOne({
        where:{id: deviceId},
        include:{
            model:Favorite,
            where:{cId: channelId}
        }
    })
}

async function idByPkExist(id){
    return await Device.findByPk(id);
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

async function addChannelToFavorites(deviceId, channelId){
    let myDevice = await idByPkExist(deviceId);
    let channelObject = await hasTheChannel(deviceId, channelId);
    let myArray = channelObject.Channels;
    let myChannel = myArray[0];
    await myDevice.createFavorite({
        cId: myChannel.id,
        name: myChannel.name,
        logo_url: myChannel.logo_url,
        category_id: myChannel.category_id,
        deviceId
    })
}

async function getAllChannels(id){
    return await Device.findOne({
        where: {id},
        include: Channel
    })
}

async function getAllFavorites(id){
    return await Device.findOne({
        where:{id},
        include: Favorite
    })
}

module.exports = {
    identifierExist,
    newDevice,
    deleteDevice,
    idByPkExist,
    hasTheChannel,
    existInFavorites,
    addChannelToFavorites,
    getAllChannels,
    getAllFavorites
}