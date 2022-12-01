const {Channel} =  require('../../db/models');

async function allChannels(){
    return await Channel.findAll({
        attributes: {

            exclude:['createdAt', 'updatedAt']
        }
    })
}

async function findChannel(id){
    return await Channel.findByPk(id)
}

module.exports = {
    allChannels,
    findChannel
}